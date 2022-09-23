import xlsx from 'node-xlsx';
import { DataStructure, Structure } from 'types/DataStructure';
import parse from 'utils/parseToPrimitive';

export class UploadFileUseCase {
  async execute(file: Express.Multer.File, query: any): Promise<any> {
    const response = xlsx.parse(file.buffer);

    console.log(response[0].data);

    const data: DataStructure[] = [];

    response.forEach(line => {
      const columns = line.data.shift() as [];

      if (columns) {
        const structure: Structure[] = [];

        for (let index = 0; index < columns.length; index++) {
          const values: unknown[] = [];

          line.data.forEach(data => {
            if (data[index]) {
              const structured_value = query[columns[index]]
                ? parse(data[index], query[columns[index]])
                : data[index];

              values.push(structured_value);
            }
          });

          structure.push({ column: columns[index], values });
        }

        data.push({
          table: line.name,
          data: structure,
        });
      }
    });

    return data;
  }
}

import xlsx from 'node-xlsx';
import { DataStructure } from 'types/DataStructure';
import parseToRealFormat from 'utils/parseToRealFormat';

import { FileConverter } from '../FileConverter';

export class XlsxFileConverter implements FileConverter {
  async build(string: DataStructure[]): Promise<any> {
    const buffer = xlsx.build(parseToRealFormat(string) as []);

    return buffer;
  }
}

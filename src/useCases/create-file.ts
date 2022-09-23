import { fileConverter } from 'services';
import { DataStructure } from 'types/DataStructure';

export class CreateFileUseCase {
  async execute(context: DataStructure[], type: string): Promise<any> {
    const converter = fileConverter(type);

    const result = converter.build(context);

    return result;
  }
}

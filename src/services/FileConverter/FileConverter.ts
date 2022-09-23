import { DataStructure } from 'types/DataStructure';

export interface FileConverter {
  build(string: any[]): Promise<any>;
}

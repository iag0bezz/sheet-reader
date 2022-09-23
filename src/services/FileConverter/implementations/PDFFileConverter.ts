import { create } from 'html-pdf';
import { resolve } from 'path';
import parsetoHTML from 'utils/parsetoHTML';
import parseToRealFormat from 'utils/parseToRealFormat';

import { FileConverter } from '../FileConverter';

export class PDFFileConverter implements FileConverter {
  async build(string: any[]): Promise<any> {
    const data = parseToRealFormat(string);

    const STRUCTURED_DATA = parsetoHTML(data);

    return new Promise((accept, reject) => {
      create(STRUCTURED_DATA, {
        directory: resolve(__dirname, '../../../../tmp'),
      }).toBuffer((err, buffer) => {
        if (err) {
          reject(err);
        } else accept(buffer);
      });
    });
  }
}

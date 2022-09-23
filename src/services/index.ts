import { DocxFileConverter } from './FileConverter/implementations/DocxFileConverter';
import { PDFFileConverter } from './FileConverter/implementations/PDFFileConverter';
import { XlsxFileConverter } from './FileConverter/implementations/XlsxFileConverter';

export const fileConverter = (type: string) => {
  switch (type) {
    case 'xlsx': {
      return new XlsxFileConverter();
    }
    case 'pdf': {
      return new PDFFileConverter();
    }
    case 'docx': {
      return new DocxFileConverter();
    }
    default: {
      return new XlsxFileConverter();
    }
  }
};

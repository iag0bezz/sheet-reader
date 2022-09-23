import parseToRealFormat from "utils/parseToRealFormat";
import { FileConverter } from "../FileConverter";

import convert from 'html-to-docx';
import parsetoHTML from "utils/parsetoHTML";

export class DocxFileConverter implements FileConverter {
  async build(string: any[]): Promise<any> {
    string = [
      {
        "table": "Orders",
        "data": [
          {
            "column": "Order ID",
            "values": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "column": "Order Name",
            "values": [
              "Test",
              "Another Test",
              "And test",
              "testing"
            ]
          }
        ]
      }
    ];

    const data = parseToRealFormat(string);

    const STRUCTURED_DATA = parsetoHTML(data);

    const response = await convert(STRUCTURED_DATA, null, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    });

    return response;
  }
}
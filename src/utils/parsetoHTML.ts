import { PrimitiveStructure } from "types/PrimitiveStructure";

export default (data: PrimitiveStructure[]): string => {
  var html = "";

  data.forEach((structure) => {
    html += "<table border='1' style='width:100%;word-break:break-word;'>";

    html += "<tr>";

    structure.data.shift().forEach((column) => {
      html += `<th>${column}</th>`;
    })

    html += "</tr>";
      
    structure.data.forEach((structureValues) => {
      html += "<tr>";
        
    structureValues.forEach((value) => {
      html += `<td>${value}</td>`;
    })

    html += "</tr>";
    });

    html += "</table>";
  }); 

  return html;
}
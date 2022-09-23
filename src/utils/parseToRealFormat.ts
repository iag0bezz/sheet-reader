import { DataStructure } from 'types/DataStructure';
import { PrimitiveStructure } from 'types/PrimitiveStructure';

export default (structure: DataStructure[]): PrimitiveStructure[] => {
  const data: PrimitiveStructure[] = [];

  structure.forEach(dataStructure => {
    const values: [unknown[]] = [
      dataStructure.data.map(columns => columns.column),
    ];

    while (dataStructure.data.some(value => value.values.length > 0)) {
      const structured_values: unknown[] = [];

      dataStructure.data.forEach(value => {
        if (value.values.length > 0) {
          structured_values.push(value.values.shift());
        }
      });

      values.push(structured_values);
    }

    data.push({
      name: dataStructure.table,
      data: values,
      options: {},
    });
  });

  return data;
};

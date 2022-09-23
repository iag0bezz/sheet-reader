export interface DataStructure {
  table: string;
  data: Structure[];
}

export interface Structure {
  column: string;
  values: unknown[];
}

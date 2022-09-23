export default (value: unknown, type: string) => {
  switch(type.toLowerCase()) {
    case 'number': {
      return Number(value);
    }
    case 'string': {
      return String(value);
    }
    case 'boolean': {
      return Boolean(value);
    }
    case 'json': {
      return JSON.stringify(value);
    }
    default: {
      return value;
    }
  }
}
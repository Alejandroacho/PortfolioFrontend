const stringifyArguments = (key: string, value: string): string => {
  switch (typeof value) {
  case 'string':
      return `${key}="${value}"`;
  case 'boolean':
      return value ? key : '';
  default:
      return `:${key}="${value}"`;
  }
};

const generateSource = (templateSource: string, args: Object): string => {
  const stringifiedArguments = Object.keys(args).map(
    (key) => stringifyArguments(key, args[key])
  ).join(' ');
  return templateSource.replace('v-bind="args"', stringifiedArguments);
};

export default generateSource;

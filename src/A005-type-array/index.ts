export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const resultconcat = toUpperCase('Pedro', 'Souza', 'OILA');

console.log(resultconcat);
console.log(result);

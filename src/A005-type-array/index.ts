function multiplyArgs(...args: Array<number>) {
  return args.reduce((acc, valor) => acc * valor, 1);
}

function createError(): never {
  throw new Error('Erro qualquer');
}

console.log(createError());

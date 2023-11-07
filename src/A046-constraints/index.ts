type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (obj, key) => obj[key];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
};

const vacinas = obterChave(animal, 'vacinas');

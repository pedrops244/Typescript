type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

export const pessoa: Pessoa = {
  idade: 30,
  nome: 'Pedr1n',
  sobrenome: 'Pedro',
};

console.log(pessoa);

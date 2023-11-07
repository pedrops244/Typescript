interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Pedro',
  sobrenome: 'Souza',
  idade: 22,
};
const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 223,
  idade: 22,
};

console.log(aluno1, aluno2);

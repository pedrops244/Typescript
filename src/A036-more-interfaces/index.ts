interface Pessoa {
  nome: string;
}
interface Pessoa {
  idade?: number;
}

interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  readonly endrecos: readonly string[];
}

const pessoa1: Pessoa = {
  nome: 'Pedro',
  sobrenome: 'Souza',
  endrecos: ['Av.Brasil'],
};
console.log(pessoa1);

/* eslint-disable no-empty-function */
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Pedro', 'Souza', 22, '123.345.335-33');
const pessoa1 = Pessoa.criaPessoa('Pedro', 'Souza');

console.log(pessoa1);
console.log(pessoa);
pessoa.metodoNormal();

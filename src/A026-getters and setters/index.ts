/* eslint-disable no-empty-function */
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Pedro', 'Souza', 22, '123.345.335-33');
pessoa.cpf = '123.345.335-99';
console.log(pessoa.cpf);

/* eslint-disable @typescript-eslint/no-explicit-any */
function decorator(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      valorPropriedade = valor.split('').reverse().join('');
    },
  };
}

export class UmaPessoa {
  @decorator
  nome: string;
  @decorator
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + this.sobrenome;
  }
}

const pessoa = new UmaPessoa('Luiz', 'Pedro', 22);
const metodo = pessoa.metodo('Uma msg bonita...');
console.log(metodo);

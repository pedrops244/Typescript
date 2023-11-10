/* eslint-disable @typescript-eslint/no-explicit-any */
function decorador(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  @decorador
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

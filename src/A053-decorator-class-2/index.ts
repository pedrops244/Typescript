/* eslint-disable @typescript-eslint/no-explicit-any */
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorator e recebi', target);
  return class extends target {
    cor: string;
    nome: string;
    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }
    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}
@inverteNomeECor
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Preto', 'Pedro');
console.log(animal);

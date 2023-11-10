/* eslint-disable @typescript-eslint/no-explicit-any */
@decorator
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}
function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

const animal = new Animal('Preto', 'Pedro');
console.log(animal);

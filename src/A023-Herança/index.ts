/* eslint-disable no-empty-function */
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `O nome completo da pessoa é ${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `O nome completo do ALUNO é: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `O nome completo do CLIENTE é: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Pedro', 'Souza', 22, '118.000.000-80');
const cliente = new Cliente('Muka', 'Bkenw', 27, '117.100.200-80');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

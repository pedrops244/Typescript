function emptyReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Pedro',
  sobrenome: 'Souza',

  exibirNome(): void {
    console.log(this.nome, this.sobrenome);
  },
};

pessoa.exibirNome();
emptyReturn('Pedro', 'Luiz', 'Souza');


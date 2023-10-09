export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cpnjoto: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cpnjoto = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaborares(): void {
    for (const colaborador of this.colaboradores) console.log(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string, // eslint-disable-next-line no-empty-function
  ) {}
}

const empresa = new Empresa('NAZA', '123-345-6-6-64-2');
const colaborador1 = new Colaborador('Pedro', 'Souza');
const colaborador2 = new Colaborador('Everton', 'Reneto');
empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
empresa.showColaborares();
console.log(empresa);

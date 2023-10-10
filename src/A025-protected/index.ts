export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cpnjoto: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa = new Udemy();
const colaborador1 = new Colaborador('Pedro', 'Souza');
const colaborador2 = new Colaborador('Everton', 'Reneto');
empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
const removido = empresa.popColaborador();
console.log(removido);
console.log(empresa);

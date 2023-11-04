export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidadeProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camisa', 29.9);
const produto2 = new Produto('Caneca', 87);
const produto3 = new Produto('Pc', 290);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto3, produto2);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());

type Age = number;
type Pessoa = {
  nome: string;
  idade: Age;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Red' | 'Yellow' | 'Blue';
type CorCMYK = 'Ciano' | 'Magenta' | 'Black';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Pedro',
  idade: 31,
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Magenta'));
console.log(setCorPreferida(pessoa, 'Black'));

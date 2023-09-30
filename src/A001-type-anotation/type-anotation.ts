/* eslint-disable*/
const nome: string = 'Pedro';
const age: number = 30;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-symbol');
// const big: bigint = 10n;

// Arrays
let arraysNumber: number[] = [10, 12, 23];
let arraysStrings: string[] = ['10, 12, 23'];

// Objects

let person: { name: string; age: number; adulto?: boolean } = {
  name: 'Pedro',
  age: 30,
  adulto: false,
};

// Functions
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

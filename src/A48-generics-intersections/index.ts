export function unirObjs<O1, O2>(obj1: O1, obj2: O2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { chave1: 'Valor 1' };
const obj2 = { chave2: 'Valor 2' };

const uniao = unirObjs(obj1, obj2);
console.log(uniao);

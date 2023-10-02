const clientDatas1: [number, string] = [1, 'Pedro'];
const clientDatas2: [number, string, string] = [1, 'Pedro', 'Souza'];
const clientDatas3: [number, string, string?] = [1, 'Pedro'];
const clientDatas4: [number, string, ...string[]] = [1, 'Pedro', 'Pedrin', 's'];

clientDatas1[0] = 100;
clientDatas1[1] = 'Marcelo';
clientDatas1.pop();

console.log(clientDatas1);
console.log(clientDatas2);
console.log(clientDatas3);
console.log(clientDatas4);

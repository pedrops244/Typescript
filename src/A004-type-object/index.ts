const objectA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyA = 'Pedr11nnnn';
objectA.keyC = 'New Ekyyyyyy';
objectA.keyD = 'New Ekyyssy';

console.log(objectA);

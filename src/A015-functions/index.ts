type mapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: mapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMaped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMaped);
console.log(abc);

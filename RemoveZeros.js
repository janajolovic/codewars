function nextBigger(n) {
    const arr = stringPermutations(n)
    console.log(arr)
    const res = 0;
 }

const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return new Set(str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      ))
};

console.log(nextBigger('53312'))
console.log(stringPermutations('abc'));
console.log(stringPermutations('*$*'));
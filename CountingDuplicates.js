function duplicateCount(text){
    return text.toLowerCase().split('').filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }
  

console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("aabBcde"))
console.log(duplicateCount("indivisibility"))
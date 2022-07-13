function findMissingLetter(array)
{
   for (let i = 0; i < array.length - 1; i++) {
        if (array[i].charCodeAt() - array[i+1].charCodeAt() == -2) {
            letter = String.fromCharCode(array[i].charCodeAt() + 1) 
        }
   }
  return letter;
}

console.log(findMissingLetter(['a','c','d']))
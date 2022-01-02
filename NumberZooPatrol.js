// function findNumber(array) {
//     array = array.sort((a,b) => (a - b))
//     full_array = [];
//     for (i = 1; i <= array.slice(-1)+1; i++) 
//         full_array.push(i)
//     for (i = 0; i <= full_array.length; i++) {
//         if (!array.includes(full_array[i]))
//             return full_array[i];
//     }
// }




// function findNumber(array) {
//     array = array.sort((a,b) => (a - b))
//     full_array = [];
//     for (i = 1; i <= array.slice(-1)+1; i++) 
//         full_array.push(i)
//     if (array === full_array) 
//         return array.length+1
//     else {
//         for (i = 0; i <= full_array.length; i++) {
//             if (!array.includes(full_array[i]))
//                 return full_array[i];
//         }
//     }
// }


// function findNumber(arr) {
//     let max = Math.max(...arr);
//     console.log(max)
//     for (let i = 1; i < max; ++i) {
//         console.log(i, arr.indexOf(i))
//       if (arr.indexOf(i) < 0) {
//         return arr.indexOf(i);
//       }
//     }
// }


// console.log(findNumber([4,2,1]))



arr = [1,2,3]
console.log(arr.indexOf(9))
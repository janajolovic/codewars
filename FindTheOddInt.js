function findOdd(arr) {
    arr1 = arr;
    for (let i = 0; i < arr.length; i++) {
        counter = 0;
        for (let j = 0; j < arr1.length; j++) {
            if (arr[i] === arr1[j]) {
                counter += 1;
            }
        }
        if (counter % 2 === 1) {
            return arr[i];
        }
    }
}


console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
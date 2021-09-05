function pyramid(n) {
    pyramid_arr = []
    for (let i=0; i<n; i++) {
        arr = []
        for (let j=0; j<=i; j++) {
            arr.push(1);
        }
        pyramid_arr.push(arr);
    }
    return pyramid_arr;
}


console.log(pyramid(3))
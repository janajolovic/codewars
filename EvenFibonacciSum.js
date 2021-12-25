function fibonacci(max) {
    let a = b = 1;
    let c = 0;
    let sum = 0
    while (b < max) {
        a = b;
        b = a + c;
        c = a;
        if (b % 2 === 0 && b < max)
            sum += b;
    }
    return sum;
}

console.log(fibonacci(33));
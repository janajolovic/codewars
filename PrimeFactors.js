function prime_factors(n) {
    factors = [];
    i = 2;
    while (n !== 1) {
        if (n % i === 0) {
            n /= i;
            factors.push(i)
        } else i++
    }
    return factors;
}

console.log(prime_factors(12))
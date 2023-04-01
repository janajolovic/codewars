n = 20

const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;

result = factorial(n*2) / (factorial(n))**2

console.log(result)
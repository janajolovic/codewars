function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}

console.log(validate('jgssdjg75328jdsFDKND'))
console.log(validate('jgs'))
console.log(validate('agiEN357?'))
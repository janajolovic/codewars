const omnibool = { n:1, valueOf: () => this.n = !this.n}

console.log(omnibool == true)
console.log(omnibool == false)
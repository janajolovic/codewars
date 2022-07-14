function sumDigPow(a, b) {
    let res = []
    for (i=a; i<b; i++) {
      let sum = 0
      num = i.toString()
      if (num.length === 1) res.push(i)
      else {
        for (j=0; j<num.length; j++) {
            sum += parseInt(num[j])**(j+1)
        }
        if (i === sum) res.push(i)
      }
    }
    
    return res
}


console.log(sumDigPow(1, 12))
console.log(sumDigPow(90, 100))
console.log(sumDigPow(1, 100))
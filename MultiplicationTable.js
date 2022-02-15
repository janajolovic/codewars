multiplicationTable = function(size) {
    let arr = []
    let row
    for (i=1; i<=size; i++) {
      row = []
      for (j=1; j<=size; j++) {
        row.push(i*j)
      }
      arr.push(row)
    }
    return arr
  }
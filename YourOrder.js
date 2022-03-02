function order(words){
    if (words.length === 0) return words
    arr = words.split(' ');
    isNum = words.match(/\d/g);
    res = [];
    for (i=1; i<=isNum.length; i++){
      ind = isNum.indexOf(i.toString())
      res.push(arr[ind])
    }
    return res.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))
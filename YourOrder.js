function order(words) {
    const findNumber = words.match(/[1-9]/g);
    const arr = words.split(" ");
    let res = [];
    if (words.length === 0) return "";
    
    arr.map((el, i) => {
      const index = findNumber.indexOf(i+1);
      res.push(arr[index]);
    });
    return res.join(' ');
}


console.log(order("is2 Thi1s T4est 3a"))
function amountOfPages(summary){
    sum = ''
    num = 1
    while (sum.toString().length !== summary) {
      sum += num.toString();
      num += 1
    }
    return num - 1
  }
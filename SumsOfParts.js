function partsSums(ls) {
    const ls_len = ls.length;
    let ls_sum = [];
    for (i=0; i<ls_len; i++) {
        sum = ls.reduce((partial_sum, a) => partial_sum + a);
        ls_sum.push(sum)
        ls.shift()
    }
    ls_sum.push(0);
    return ls_sum;
}

console.log(partsSums([0, 1, 3, 6, 10]))
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))
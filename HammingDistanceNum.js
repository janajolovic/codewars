function hamming(a,b) {
    a = byteString(a);
    b = byteString(b);
    let num, counter = 0
	a.length > b.length ? num = a.length : num = b.length
    for (i = 0; i<num; i++) {
        if (a[i] !== b[i]) {
            counter ++;
        } 
    }
    return counter;
}

console.log(hamming(256, 302));
console.log(byteString(256))


function byteString(n) {
    return ("000000000" + n.toString(2)).substr(-8)
}

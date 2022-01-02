function hamming(a,b) {
    let num, counter = 0
	a.length > b.length ? num = a.length : num = b.length
    for (i = 0; i<num; i++) {
        if (a[i] !== b[i]) {
            counter ++;
        } 
    }
    return counter;
}

console.log(hamming("I like turtles","I like turkeys"));
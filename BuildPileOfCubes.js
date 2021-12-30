function findNb(m) {
    resenje = 0;
    n = 1;
    while (resenje < m) {
        resenje += n**3
        n += 1; 
    }

    if (resenje===m) {
        return n-1;
    } 
    return -1;
}

console.log(findNb(1071225));
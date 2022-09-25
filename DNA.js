function getCountedNucleotides(genCode){
    const DNA = {A: 0, C: 0, G: 0, T: 0};
    genCode.toUpperCase().split``.map(v=>DNA[v]=DNA[v]?DNA[v]+1:1)
    return DNA
}
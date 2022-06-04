function slicesToName(n) {
    let name = ""
    if (n < 2) return null
    else if (n % 2 == 0) {
        for (i=0; i<n/2; i++) {
            name += 'sandwich '
        }
        return name
    } else {
        name += "bread "
        for (i=0; i<(n-1)/2; i++) {
            name += 'sandwich '
        }
        return name;
    }
}
  
function nameToSlices(name) {
    if (name) name = name.split(" ")
    else return ""
    n = 0
    if (name[0] == "bread") {
        n = 1 + (name.length - 1) * 2 
    } 
    else if (name[0] == "sandwich") {
        n = name.length * 2
    }
    return n
}

console.log(slicesToName(5))
console.log(nameToSlices('sandwich sandwich'))
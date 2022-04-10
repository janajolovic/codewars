function changer(str) {
    const vowels = 'aeiou'
    const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = str.split("").map((l) => {
        if (!alp.includes(l.toLowerCase())) return l
        if (l.toLowerCase() === 'z') return 'A'
        else {
            let l2 = alp[alp.indexOf(l.toLowerCase()) + 1];
            if (vowels.includes(l2)) return l2.toUpperCase()
            else return l2.toLowerCase()
        }
    })
    return result.join("")
}

console.log(changer('Cat30'))
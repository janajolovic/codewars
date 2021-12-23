function spongeMeme(sentence) {
    let arr = sentence.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr[i]= arr[i].toUpperCase()
        } else  {
            arr[i]=arr[i].toLowerCase()
        }
     }
    return arr.join("");
}


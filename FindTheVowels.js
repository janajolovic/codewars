function vowelIndices(word){
    vowels = ["a", "e", "i", "o", "u", "y"]
    word = word.toLowerCase()
    res = []
    for (i=0; i<word.length; i++) {
      if (vowels.includes(word[i])) {
        res.push(i+1)
      }
    }
    return res
}
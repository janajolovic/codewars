function getCount(str) {
    var vowelsCount = 0;
    vowels = ['a', 'e', 'i', 'o', 'u']
    for (i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) 
        vowelsCount++
    }
    
    return vowelsCount;
  }
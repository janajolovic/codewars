function blackOrWhiteKey(keyPressCount) {
    list = [1, 4, 6, 9, 11]
    if (list.includes((keyPressCount-1) % 88 % 12)) {
      return 'black'
    } else return 'white'
}

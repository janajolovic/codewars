var moveZeros = function (arr) {
    const first_part = arr.filter(el => el !== 0)
    const second_part = arr.filter(el => el === 0)
    return first_part.concat(second_part)
  }
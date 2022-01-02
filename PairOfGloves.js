function numberOfPairs(gloves)
{
  gloves_obj = gloves.reduce((pre, curr) => (pre[curr] ? ++pre[curr] : pre[curr] = 1, pre), {});
  let pair = 0
  Object.keys(gloves_obj).forEach((key, i) => {
    pair += (Math.floor(gloves_obj[key] / 2))
  })
  return pair
}


console.log(numberOfPairs( ["red", "red", "red", "green", "green", "blue"]));
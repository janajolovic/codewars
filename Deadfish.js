function parse( data )
{
  const res = [] 
  value = 0
  data.split("").forEach(c => {
      if (c === "i") value += 1
      else if (c === "d") value -= 1
      else if (c === "s") value = value**2
      else if (c === "o") res.push(value)
  })
  return res
}


console.log(parse("iiisdoso"))
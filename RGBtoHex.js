const rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);

function toHex(n) {
  if (n <= 0)   return '00';
  if (n > 255)  return 'FF';
  return n.toString(16).toUpperCase().padStart(2, '0')
}


console.log(rgb(0, 0, -20))
console.log(rgb(300,255,255))
console.log(rgb(173,255,47))
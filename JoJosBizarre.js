var regex = /Jo/
function isJojo(name){
  name=name.toLowerCase()
  let first_name = name.split` `[0]
  let surname = name.split` `[1]
  if (first_name.slice(0,2)==='jo' && surname.slice(0,2)==='jo') return true
  if (first_name.slice(0,2)==='jo' && surname.slice(-2)==='jo') return true
  if (first_name.slice(0,3)==='gio' && surname.slice(0,3)==='gio') return true
  if (name === 'dio brando') return "yet it is because he took jonathan's body"
  return false 
}

console.log(isJojo('Jotaro Kujo'))
console.log(isJojo('Giorno Giovanna'))
console.log(isJojo('Caesar Zeppeli'))
console.log(isJojo('Dio Brando'))
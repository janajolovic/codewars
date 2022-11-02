function toCamelCase(str){
    const regExp = /[-_]\w/ig;
    return str.replace(regExp,(match) => {
        return match[1].toUpperCase()
     });
}

console.log(toCamelCase("the-stealth-warrior"))
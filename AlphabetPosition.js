
function alphabetPosition(text) {
    res = "";

    for (let i = 0; i < text.length; i++) {
        letter = text[i].toLowerCase();
        if (letter.charCodeAt(0) <= 122 && letter.charCodeAt(0) >= 97) {
            res += " " + (letter.charCodeAt(0) - 96);
        }
        
    }
    return res.slice(1);
}


str = "the sunset sets at twelve o'clock."

console.log(alphabetPosition(str));
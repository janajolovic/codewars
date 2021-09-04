
function wordSplitter(string){
    for (i=0; i<string.length; i++) {
        if (((string[i].charCodeAt() >= 32 && string[i].charCodeAt() <= 47) || 
            (string[i].charCodeAt() >= 58 && string[i].charCodeAt() <= 63) || 
            (string[i].charCodeAt() >= 91 && string[i].charCodeAt() <= 96) ||
            (string[i].charCodeAt() >= 123 && string[i].charCodeAt() <= 126)) && (string[i] !== ".") && (string[i] !== "-")) {
            string = string.replace(string[i], " ")
        }
    }
    string = string.split(" ")
    for (i=0; i<string.length; i++) {
        if (string[i] === "") {
            string.splice(i,1)
        }
    }
    return string;
}


str = "32.0500;-6C:PITCH=-72#ROLL!21.3*REGISTER:90.345689&ARMED?-25";

console.log(wordSplitter(str))
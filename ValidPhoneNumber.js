

function validPhoneNumber(phoneNumber){
    return /^\(\d{3}\)\s\d{3}\-\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber("(123 456-7890"))




function countSmileys(arr) {
    count = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i].length === 2) {
            if ((arr[i][0].includes(":") || arr[i][0].includes(";")) && 
                (arr[i][1].includes(")") || arr[i][1].includes("D")))  {
                count+=1;
            }
        }
        if (arr[i].length === 3) {
            if (    (arr[i][0].includes(":") || arr[i][0].includes(";")) && 
                    (arr[i][2].includes(")") || arr[i][2].includes("D")) && 
                    (arr[i][1].includes("~") || arr[i][1].includes("-")))  {
                count+=1;
            }
        }
    }
    return count;
}

console.log(countSmileys([":D", ";-)", ":("]));
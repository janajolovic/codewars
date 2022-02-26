function findNumber(array) {
    array = array.sort((a,b) => (a - b))
    let all_numbers = []
    for (i = array[0]; i <= array[array.length-1]; i++) {
        all_numbers.push(i)
    }
    if (JSON.stringify(array)==JSON.stringify(all_numbers)) {
        return array[array.length - 1] + 1;
    }
    all_numbers = new Set(all_numbers)
    let numbers = new Set(array);
    return difference(all_numbers, numbers)
}

function difference(setA, setB) {
    const diff = new Set(setA);
    for (const elem of setB) {
        diff.delete(elem);
    }
    return diff;
}

console.log(findNumber([1,3]))
function inArray(array1,array2){
    let r = []
    array2 = array2.forEach((w) => {
      for (i = 0; i < array1.length; i++) {
        if (w.includes(array1[i]) && !r.includes(array1[i])) r.push(array1[i])
      }
    })
    return r.sort()
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]

console.log(inArray(a1, a2))
// function powerSumDigTerm() {
//     arr = []
//     sum = 0;
//     n = 1;
//     while (n < 5000) {

//     }
    
// }


// console.log(powerSumDigTerm())




function towerBuilder(nFloors) {
    tower = []
    for (let i=1; i<=nFloors; i+=2) {
        tower.push(["*".repeat(i)])
    }

    return tower;
}


console.log(towerBuilder(9))
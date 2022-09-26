function houseOfCards(floors){
    if(floors<1||floors!==parseInt(floors)){throw new Error('Error')}
    let currFloor = 2, total = 2;
    for (let i = 1; i <= floors; i++) {
      currFloor += 3;
      total += currFloor;
    }
    return total;
}
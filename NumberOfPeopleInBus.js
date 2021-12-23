var number = function(busStops){
    br_putnika = 0;
    for (i=0; i<busStops.length; i++) {
        br_putnika += busStops[i][0];
        br_putnika -= busStops[i][1];
    }
    return br_putnika;
}

console.log(number([[10,0],[3,5],[5,8]]))
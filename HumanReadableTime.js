
function humanReadable(seconds) {
    ss = 0;
    mm = 0;
    hh = 0;
    hh = Math.floor(seconds / 3600);
    mm = Math.floor((seconds - hh * 3600) / 60);
    ss = Math.floor(seconds - hh * 3600 - mm * 60);
    if (ss < 10) {
        ss = "0" + ss;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
    return `${hh}:${mm}:${ss}`
}


console.log(humanReadable(84599))

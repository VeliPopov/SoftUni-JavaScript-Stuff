function clock(input) {
    for (let hours = 0; hours < 24; hours++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            let buffer = '';
            if (hours < 10) {
                buffer += '0' + hours;
            } else {
                buffer += hours;
            }
            buffer += ':';
            if (minutes < 10) {
                buffer += '0' + minutes;
            } else {
                buffer += minutes;
            }
            console.log(buffer);
        }
    }
 
}
clock()
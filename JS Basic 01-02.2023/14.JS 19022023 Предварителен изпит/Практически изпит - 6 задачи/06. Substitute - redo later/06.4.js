function substitute(input) {
    let k = input[0];
    let l = input[1];
    let m = input[2];
    let n = input[3];
    let counter = 0;
    buff = '';
    for (let a = k; a <= 8; a++) {
        if (a % 2 == 0) {
            for (let b = 9; b >= l; b--) {
                if (b % 2 == 1) {
                    for (let c = m; c <= 8; c++) {
                        if (c % 2 == 0) {
                            for (let d = 9; d >= n; d--) {
                                if (d % 2 == 1) {
                                    buff = '' + a + b + " - " + c + d;
                                    if (a == c && b == d) {
                                        console.log("Cannot change the same player.");
                                    } else {
                                        console.log(buff);
                                        counter++;
                                        if (counter == 6) {
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

substitute(["6",
    "7",
    "5",
    "6"])
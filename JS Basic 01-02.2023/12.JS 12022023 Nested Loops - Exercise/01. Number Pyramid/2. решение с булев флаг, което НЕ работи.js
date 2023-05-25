function numberPyramid(input) {
    let n = Number(input[0]);

    let currentDigit = 1;
    let printCurrentLine = '';
    let isBigger = false;


    for (let rows = 1; rows <= n; rows++) {
        for (let column = 1; column <= n; column++) {

            if (currentDigit > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentDigit + ' ';
            currentDigit++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }

    }

}
numberPyramid(["7"]);
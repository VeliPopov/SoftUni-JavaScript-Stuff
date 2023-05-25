function numberPyramid(input) {
    let n = Number(input[0]);

    let currentDigit = 1;
    let printCurrentLine = '';

    for (let rows = 1; rows <= n; rows++) {
        for (let column = 1; column <= rows; column++) {
            
            if (currentDigit > n) {
                break;
            }
            printCurrentLine += currentDigit + ' ';
            currentDigit++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (currentDigit > n) {
            break;
        }
    }
}
numberPyramid(['7'])
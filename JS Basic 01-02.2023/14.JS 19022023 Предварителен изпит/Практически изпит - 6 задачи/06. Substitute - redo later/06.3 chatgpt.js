function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let substituteCount = 0;

    for (let a = k; a <= 8; a++) {
        for (let b = 9; b >= l; b--) {
            for (let c = m; c <= 8; c++) {
                for (let d = 9; d >= n; d--) {

                    let firstNumber = `${a}${b}`;
                    let secondNumber = `${c}${d}`;


                    if (a % 2 === 0 && c % 2 === 0) {
                        if (b % 2 !== 0 && d % 2 !== 0) {
                            if (firstNumber !== secondNumber) {
                                console.log(`${firstNumber} - ${secondNumber}`);
                                substituteCount++;
                                if (substituteCount > 6) {
                                    return substituteCount;
                                }
                            } else {
                                console.log(`Cannot change the same player.`);
                            }

                        }

                    }
                }

            }

        }

    }
    return substituteCount;
}
substitute(["6",
"7",
"5",
"6"]);
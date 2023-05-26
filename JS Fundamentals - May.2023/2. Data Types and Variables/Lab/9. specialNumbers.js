//TODO: not my solution - revise it later!

function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let currentNumber = String(i)
        let sum = 0;
        for (let num = 0; num < currentNumber.length; num++) {
            let digit = Number(currentNumber[num])
            sum += digit;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${currentNumber} -> True`);
        } else {
            console.log(`${currentNumber} -> False`);
        }
    }
}
specialNumbers(15)
//To calculate the sum of digits of given number num, you might repeat the following: sum the last digit (num % 10) 
// and remove it (sum = sum / 10) until num reaches 0. Use parseInt() while dividing to get only integer numbers.

function specialNumbers(num) {

    let isSpecialNumber = '';

    for (let i = 1; i <= num; i++) {
        let sum = parseInt((i / 10) + (i % 10))
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecialNumber = 'True'
        } else {
            isSpecialNumber = 'False'
        }
        console.log(`${i} -> ${isSpecialNumber}`);
    }
}
specialNumbers(15)

// с (i / 10) се взима първото число а с (i % 10)?
//сумира се и се парсва към цяло число
//прави се проверка и се печата резултата
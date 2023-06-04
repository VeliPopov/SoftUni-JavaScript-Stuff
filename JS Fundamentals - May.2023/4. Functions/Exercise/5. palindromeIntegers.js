function palindromeIntegers(array) {

    for (let index = 0; index < array.length; index++) {

        let currentNumberAsString = array[index].toString(); // бърка в масива, взима съответния индекс и го обръща към стринг
        let reversedNumber = currentNumberAsString.split('').reverse().join('');

        if (currentNumberAsString === reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
        
    }
    
}
palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])
// console.log(palindromeIntegers([123, 323, 421, 121]));
// console.log(palindromeIntegers([32, 2, 232, 1010]));

        // '123' -> .split() -> ['1','2','3']
        // .reverse() -> ['3', '2', '1']
        // .join() -> '321' 


function lastKNumbersSequence(n, k) {

    let array = [1];

    while (n > array.length) {
        let kArray = array.slice(- k) // (k * - 1)
        let sum = 0;
        for (let i = 0; i < kArray.length; i++) {
            sum += kArray[i];
        }
        array.push(sum);
    }
    console.log(array.join(' '));

}
lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)
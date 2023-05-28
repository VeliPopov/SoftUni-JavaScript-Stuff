function evenAndOddSubtraction(arr) {

    let oddSum = 0;
    let evenSum = 0;

    for(let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    let result = evenSum - oddSum;
    console.log(result);

}
evenAndOddSubtraction([2,4,6,8,10])
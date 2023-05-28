function evenAndOddSubtraction(arr) {

    //в случай, че подадения масив идва като стринг, трябва първо да направя едни for цикъл за да парстна стринговите стойности към число:

    // for (let i = 0; i <arr.length; i++) {
    //     arr[i] = Number(arr[i]);
    // }

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
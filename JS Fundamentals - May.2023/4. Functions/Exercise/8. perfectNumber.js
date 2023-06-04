function perfectNumber(number) {
    let sum = 0;
    for (let index = 1; index <= number / 2; index++) {
        if (number % index === 0) {
            sum += index;
        }
    }
    if (sum === number && number !== 1) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498) 
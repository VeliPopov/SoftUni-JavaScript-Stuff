function signCheck(numOne, numTwo, numThree) {
    let negativeCount = 0;

    if (numOne < 0) {
        negativeCount++;
    }
    if (numTwo < 0) {
        negativeCount++;
    }
    if (numThree < 0) {
        negativeCount++;
    }

    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)

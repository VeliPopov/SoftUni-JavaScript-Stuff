function invalidNumber(input) {
    let number = Number(input[0]);
    let isValid = number >= 100 && number <= 200;
    if (!isValid && number !== 0) {
        console.log("invalid");
    }
}
invalidNumber(["150"]); 
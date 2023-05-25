function evenOrOdd(input) {
    let num = Number(input[0]);

    let isValid = num % 2;

    // if (num % 2 === 0) - може и така да се запише долния ред
    if (isValid === 0) {
        console.log("even");

    } else {
        console.log("odd");

    }

}
evenOrOdd(["1123445"]);
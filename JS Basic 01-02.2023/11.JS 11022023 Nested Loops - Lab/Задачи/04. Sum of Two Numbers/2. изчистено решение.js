function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isFound = false; 

    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            counter++; 
            if (x + y === magicNumber) {
                isFound = true; 
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["88",
    "888",
    "2000"]);
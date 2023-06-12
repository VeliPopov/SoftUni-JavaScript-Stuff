function bombNumbers(sequence, bombParam) {
    let bombNumber = bombParam[0];
    let bombPower = bombParam[1];

    for(let index = 0; index < sequence.length; index++) {
        if(sequence[index] === bombNumber) {
            let start = Math.max(0, index - bombPower);
            let end = Math.min(sequence.length - 1, index + bombPower);

            sequence.splice(start, end - start + 1);
            
            // Reset index to the beginning
            index = -1;
        }
    }

    let output = sequence.reduce((a, b) => a + b, 0);

    console.log(output);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])

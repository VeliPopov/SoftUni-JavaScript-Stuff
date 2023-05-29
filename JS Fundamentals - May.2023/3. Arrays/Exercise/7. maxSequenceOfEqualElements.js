function maxSequenceOfEqualElements(array) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let index = 0; index < array.length; index++) {

        if (index !== 0) {
            let currentNumber = array[index];
            let previousNumber = array[index - 1];

            if (currentNumber === previousNumber) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = currentNumber;
                }
            } else {
                sequence = 1;
            }
        }
    }
    console.log(`${(maxSequenceNum+' ').repeat(maxSequence)}`);
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])

    // repeat() - повтаря един стринг 'n' на брой пъти: 'asd '.repeat(3)
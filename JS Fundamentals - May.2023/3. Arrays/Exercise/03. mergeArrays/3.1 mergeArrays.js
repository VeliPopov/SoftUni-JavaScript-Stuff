function mergeArrays(firstArray, secondArray) {

    let newArray = [];
    let firstArrayLength = firstArray.length;
    let secondArraylength = secondArray.length;

    let smallerLength = Math.min(firstArrayLength, secondArraylength);

    for (let index = 0; index < smallerLength; index++) {

        if (index % 2 === 0) {
            newArray[index] = Number(firstArray[index]) + Number(secondArray[index]);
        } else {
            newArray[index] = firstArray[index] + secondArray[index];
        }
    }
    console.log(newArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77'], ['22', '333', '5', '122', '44'])


//решение в случай, че масивите са с различни дължини
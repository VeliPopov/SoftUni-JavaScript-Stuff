function mergeArrays(firstArray, secondArray) {

    let newArray = [];
    //може да се оптимизира, като се изнесе дължината на масива в отделна променлива

    for (let index = 0; index < firstArray.length; index++) {

        if (index % 2 === 0) {
            newArray[index] = Number(firstArray[index]) + Number(secondArray[index]);
        } else {
            newArray[index] = firstArray[index] + secondArray[index];
        }
    }
    console.log(newArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])
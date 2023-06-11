function negativeOrPositiveNumbers(array) {
    let newArray = [];

    for (let element of array) {
        element = Number(element);
        if (element < 0) {
            newArray.unshift(element)
        } else {
            newArray.push(element);
        }
    }
    //console.log(newArray);
    for (let element of newArray) {
        console.log(element);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
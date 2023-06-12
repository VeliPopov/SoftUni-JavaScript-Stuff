function distinctArray(data) {
    
    let finalArray = [];

    for (let element of data) {
        if (!finalArray.includes(element)) { // ако го няма го добави
            finalArray.push(element);
        }
    }
    console.log(finalArray.join(' '));
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
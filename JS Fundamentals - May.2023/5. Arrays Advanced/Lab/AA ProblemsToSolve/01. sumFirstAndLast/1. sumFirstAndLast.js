function sumFirstAndLast(array) {
    //(array.length - 1) - винаги връща последния елемент от масива
    let sum = Number(array[0]) + Number(array[array.length - 1])
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])
function sumFirstAndLast(array) {
    //(array.length - 1) - винаги връща последния елемент от масива
    let sum = Number(array.shift()) + Number(array.pop())
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])
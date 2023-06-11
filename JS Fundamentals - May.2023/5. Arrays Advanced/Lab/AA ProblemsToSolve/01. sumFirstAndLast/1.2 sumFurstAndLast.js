function sumFirstAndLast(array) {
    if (array.length === 1) {
        return console.log(Number(array.toString())); // ['7'] -> '7' -> 7
    }
    // early return - използва се често в практиката 
    // в началото на функцията да провери дали кода описан във функцията има смисъл да се изпълнява
    // проверява дали далжината на масива е от едни елемент и връща неговата цифрова стойност като стринг


    let sum = Number(array.shift()) + Number(array.pop());
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])
sumFirstAndLast(['7'])
function firstAndLastKNumbers(array) {
    let k = array.shift(); // k = първият елемент от масива (на 0-вия индекс)
    let firstK = array.slice(0, k); // firstK = на двата елемента след 0-вия индекс
    let lastK = array.slice(array.length - k) // lastK = последните два елемента от края на масива
    //let lastK = array.slice(k * -1) - може и така да бъде записян горния ред
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
    
}
firstAndLastKNumbers([2, 7, 8, 9])
firstAndLastKNumbers([3, 6, 7, 8, 9])
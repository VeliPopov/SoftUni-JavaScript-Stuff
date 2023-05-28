function reverseAnArrayOfNumbers(n, arr) {

    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    let reverseArr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        reverseArr.push(newArr[i]);     // директно пушва получения резултат в нов масив                 

    }
    console.log(reverseArr.join(' '));  // печати новия резулат, използвайки метода join

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])


//най-доброто решение
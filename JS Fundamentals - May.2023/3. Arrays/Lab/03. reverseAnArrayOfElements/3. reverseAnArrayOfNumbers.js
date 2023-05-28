function reverseAnArrayOfNumbers(n, arr) {

    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    //console.log(newArr.join(' ')); - 10 20 30 (с първия пример)

    let output = '';                                 // буферна променлива - празна
    for (let i = newArr.length - 1; i >= 0; i--) {   // върти получения нов масив в обратен ред
        output += `${newArr[i]} `;                   // конкатенира резултата от цикъла в новата променлива

    }
    console.log(output);

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
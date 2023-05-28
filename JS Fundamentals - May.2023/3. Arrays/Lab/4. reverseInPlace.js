function reverseInPlace(arr) {
    
    for (let i = 0; i < arr.length / 2; i++) {
        
        let firstElement = arr[i];
        let secondElement = arr[arr.length - 1 - i];
        arr[i] = secondElement;
        arr[arr.length - 1 - i] = firstElement;
    }
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])

// итерирам по цикъла
// разделям масива на две части - върти до половината на цикъла (2.5 - ако е с четен брой елементи - или с един елемент повече от средата)
// вземам първия елемент arr[i] - елемента на 0-вия индекс (на първата итерация)
// казвам, че следващия елемент, с който трябва да го swap-на елемента на arr.length - 1 (последния елемент в първата итерация)
// arr.length - 1 - i - на първата итерация i e 0 //4
// arr.length - 1 - i - на втората итерация i e 1 //3
// arr.length - 1 - i - на третата итерация i e 2 //2
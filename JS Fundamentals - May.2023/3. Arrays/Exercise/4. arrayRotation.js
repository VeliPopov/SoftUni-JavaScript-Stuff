function arrayRotation(arr, rotations) {

    for (let index = 1; index <= rotations; index++) {

        let firstElement = arr.shift(); // метода shift() изрязва елемента на 0-лев индекс
        arr.push(firstElement);  //метода push(), добавя изрязания вече елемент, накрая на масива           
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5) 
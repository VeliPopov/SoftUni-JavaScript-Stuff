function sorting(data) {

    // на sort() метода се подава функция, като в тази функция се подават двата критерия, които се сравняват (по някакъв начин), и казваме как искаме да ги върне  
    let sortedArray = data.sort((a, b) => b - a); // от по-голямото към по-малкото (a - b - от по-малкото към по-голямото)
    let output = [];
    let sortedLength = sortedArray.length; //трябва да я има тази променлива, тъй като без нея не хваща дължината на масива правилно, заради преоразмеряването от използваните елементи

    for (let index = 0; index < sortedLength / 2; index++) {
        let currentElement = sortedArray.shift(); // изрязва елемента на първия - 0-вия индекс
        let lastElement = sortedArray.pop(); // изрязва елемента на последния индекс
        output.push(currentElement);
        output.push(lastElement);
    }
    console.log(output.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
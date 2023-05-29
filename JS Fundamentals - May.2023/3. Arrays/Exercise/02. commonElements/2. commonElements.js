function commonElements(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++) {

        let currentElement = firstArray[i];

        if (secondArray.includes(currentElement)) {
            console.log(currentElement);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])

// взимаме два масива като параметри на функцията
// въртим до дължината на първия и дефинираме една помощна променлива
// ако във втория масив се съдържа даден елемент от първия - изкарай го на конзолата
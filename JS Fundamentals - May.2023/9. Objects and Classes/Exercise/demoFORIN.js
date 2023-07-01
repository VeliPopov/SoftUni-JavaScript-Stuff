function employees(namesArray) {

    let object = {
        name: 'Puncho',
        age: 7
    }

    for (const key in object) {
        console.log(key);
    }
    // изкарва ми всички ключове
    // името на key може да е различно - например element
}
employees()

//* for in е идеален за обработка са обикти, докато for of за масиви 

function employees(namesArray) {

    let object = {
        name: 'Puncho',
        age: 7
    }

    for (const key in object) {
        console.log(object[key]);
    }
    // в този му вариант ще ми изкара всички велюта зад ключа
}
employees()
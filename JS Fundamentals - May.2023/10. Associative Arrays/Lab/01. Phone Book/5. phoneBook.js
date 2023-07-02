function phoneBook(data) {

    let object = {};

    for (let element of data) {
        let [name, number] = element.split(' ');
        object[name] = number;

    }
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key} -> ${value}`);
    }

    // същия резултат като 2-ро решение
    // for of цикъла вади двойки ключ и стойност

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])
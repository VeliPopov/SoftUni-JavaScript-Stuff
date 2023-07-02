function phoneBook(data) {

    let object = {};

    for (let element of data) {
        let [name, number] = element.split(' ');
        object[name] = number;

    }
    for (const key in object) {
        console.log(`${key} -> ${object[key]}`);
    }

    // винаги последния запис взема превес - презаписва стойността зад подаден ключ със същото име

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])
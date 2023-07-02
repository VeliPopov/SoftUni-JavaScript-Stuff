function phoneBook(params) {

    let phoneBook = {};

    for (let info of params) {
        let [name, phone] = info.split(' ');

        phoneBook[name] = phone;
    }

    for (let person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])

    // не знам защо, но работи и така - с еднакво име на функцията и обекта


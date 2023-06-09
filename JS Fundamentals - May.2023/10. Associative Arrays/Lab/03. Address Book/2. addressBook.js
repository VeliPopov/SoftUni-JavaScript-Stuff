function addressBook(data) {

    let object = {};

    for (let element of data) {
        let [name, address] = element.split(':');
        object[name] = address;
    }

    let entries = Object.entries(object).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }


}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])
function addressBook(params) {

    let addressBook = {};

    for (let info of params) {
        let [name, address] = info.split(':');

        addressBook[name] = address;
    }

    let sortedNames = Object.keys(addressBook).sort();

    for (let name of sortedNames) {
        console.log(`${name} -> ${addressBook[name]}`);
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

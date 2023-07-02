function addressBook(data) {

    let object = {};

    for (let element of data) {
        let [name, address] = element.split(':');
        object[name] = address;
    }

    let entries = Object.entries(object).sort((a,b) => a[0].localeCompare(b[0]));
    // a[1].localeCompare(b[1]) - сортира ги по value
    for (let key of entries) {
        console.log(`${key[0]} -> ${key[1]}`);
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
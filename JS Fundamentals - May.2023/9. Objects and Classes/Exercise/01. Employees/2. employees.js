function employees(namesArray) {

    let object = {};

    for (const name of namesArray) {
        object[name] = name.length;
    }
    // преди for of цикъла обекта е празен
    // с цикъла го попълваме, като, като ключ ще сложим името, а като велю дължината на всеки едни от подадените стрингове    console.log(object);

    for (const key in object) {
        console.log(`Name: ${key} -- Personal Number: ${object[key]}`);
    }
    

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])

// по-удачното решение от двете
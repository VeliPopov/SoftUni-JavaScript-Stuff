function employees(params) {
    let workforce = {};

    for (let index = 0; index < params.length; index++) {
        let name = params[index];
        let personalNumber = name.length;
        workforce[name] = personalNumber;
    }

    for (let name in workforce) {
        console.log(`Name: ${name} -- Personal Number: ${workforce[name]}`);
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
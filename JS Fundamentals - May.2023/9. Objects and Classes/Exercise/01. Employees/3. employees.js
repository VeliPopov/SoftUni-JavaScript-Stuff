function employees(namesArray) {


    for (const name of namesArray) {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`);
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

// работи с for of, но не е ок решение 
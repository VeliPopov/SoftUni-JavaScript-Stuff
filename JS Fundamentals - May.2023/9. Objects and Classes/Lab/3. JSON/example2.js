function example() {
    let myObj = {
        name: "Ivan",
        age: 25,
        Chemistry: [4.50]
    }
    console.log(myObj);
    console.log(JSON.stringify(myObj));
    // {name: 'Ivan', age: 25, Chemistry: Array(1)} 
    // {"name":"Ivan","age":25,"Chemistry":[4.5]} - цялото нещо е един стринг
}
example()
function example() {
    let myObj = {
        name: "Ivan",
        age: 25,
        Chemistry: [4.50]
    }
    let myJSON = JSON.stringify(myObj);
    console.log(myJSON);
    let obj = JSON.parse(myJSON);
    console.log(obj);
    
}
example()

// JSON.stringify() го подаваме като текст по мрежата (стринг)
// и от другата страна го присвояваме (parse-ваме) с другия built-in метод JSON.parse() на нова променлива 
// така се получава js обект

// {"name":"Ivan","age":25,"Chemistry":[4.5]}   - като текст (стринг)
// {name: 'Ivan', age: 25, Chemistry: Array(1)}  - като js object
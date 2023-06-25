function example() {
    let myObj = {
        name: "Ivan",
        age: 25,
        Chemistry: [4.50]
    }
    
    // най-честият синтаксис за копие на обект е:
    // получава се дълбоко копие - абсолютно всички данни са копирани в нов обект - няма референция
    let myObj2 = JSON.parse(JSON.stringify(myObj));
    myObj.test = 'add new entry';  // променя само първия обект
    

    console.log(myObj);
    console.log(myObj2);
    
}
example()

// slice() прави плитко копие (копира данните само на първо ниво)
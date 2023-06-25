function objectsDemo(key) {
    let myObj = {
        name: 'Puncho',
        age: 7
    }
    myObj.energyLevel = 'Insane';
    myObj['hideColor'] = 'white and gold';
    
    console.log(myObj);
    console.table(myObj);     
}
objectsDemo('energyLevel')

// при масиви и обикти, ако опитваме да достъпим стойност, която не съществува, получавме undefined

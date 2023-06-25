function objectsDemo(key, value) {
    let myObj = {
        name: 'Puncho',
        age: 7
    }
    myObj.energyLevel = 'Insane';
    myObj['hideColor'] = 'white and gold'; // винаги заменя само стойността зад ключа; а ако подадем несъществуващ ключ го създава и му приписва новата стойност
    myObj[key] = value;
    
    console.log(myObj);
    console.table(myObj);     
}
objectsDemo('hideColor', 'gold')
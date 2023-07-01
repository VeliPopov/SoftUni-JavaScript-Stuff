function demoObj(params) {
    
    let obj = {
        name: 'Puncho',
        // name = ''; - възможно е
        age: 7,
        job: 'mufta'
    }; 

    // console.log(obj.name); - . е начин за достъпване на ключ (стойността зад ключа)
    // console.log(obj['age']); // друг вариант за достъпване на ключ

    // obj.name = 'Divcho'; // достъпвам и променям ключ (стойността зад него)
    // obj['name'] = 'Divcho'; - може и така

    obj.hasCar = true;


    console.log(obj);
}
demoObj()



// Обекта е елемент, който е изграден на даден шаблон в повечето случаи, и в себе си съдържа двойка ключ и стойнст
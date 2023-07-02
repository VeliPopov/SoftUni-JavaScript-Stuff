function demo(params) {
    
    let obj = {
        name: 'Puncho',
        age: 7
    }

    let {name, age} = obj;
    // трябва да отговарят на имната на пропъртитата в обекта, за да знае кои ключове да вземе

    console.log(name);
    console.log(age);
}
demo()
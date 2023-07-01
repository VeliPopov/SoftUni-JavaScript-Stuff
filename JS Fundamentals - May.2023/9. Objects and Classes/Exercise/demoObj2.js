function demoObj(params) {
    
    let obj = {
        name: 'Puncho'
    }

    let obj2 = obj;

    obj.name = 'Divcho';

    console.log(`OBJ1: ${obj.name}`);
    console.log(`OBJ2: ${obj2.name}`);
}
demoObj()

// обект не се копира (клонира) по този начин
// заместването става по този начин заради референцията

// ДЪЛБОКО КОПИЕ се прави чрез два метода - jason.parse() и jason.stringify()
// let obj2 = JSON.parse(JSON.stringify(obj));
// JSON.stringify(obj) - взима обекта и ко прави на стринг, а след това JSON.parse взима стринга и го обръща отново на обект

// delete. оператора трие двойката ключ + стойност

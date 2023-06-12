function houseParty(list) {

    let guestList = [];

    for (let person of list) {
        let info = person.split(' '); // минаваме от всеки едни от дадените елементи и взимаме отделното инфо
        let personName = info[0];
        
        if (info.includes('not')){

            if (guestList.includes(personName)) {
                let nameIndex = guestList.indexOf(personName);

                if (nameIndex !== -1) { // aко е съществуващ индекс (има го в масива)
                    guestList.splice(nameIndex, 1);
                }
            }else {
                console.log(`${personName} is not in the list!`);
            }
        }else {
            if(guestList.includes(personName)) {
                console.log(`${personName} is already in the list!`);
            } else{
                guestList.push(personName)
            }
        }
    }
    console.log(guestList.join('\n'));
    
    // for (let person of guestList) {
    //     console.log(person);
    // }

    // guestList.forEach(person => console.log(person));

    // три начина за идентично принтиране на резултата
}
houseParty(
    ['Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!'])
houseParty(
    ['Tom is going!',
        'Annie is going!',
        'Tom is going!',
        'Garry is going!',
        'Jerry is going!'])
// по-правилния вариант

function personInfo(firstName, lastName, age) {
    let myObject = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return myObject;

}
console.log(personInfo("Peter",
"Pan",
"20"));
console.log(personInfo("George",
"Smith",
"18"));
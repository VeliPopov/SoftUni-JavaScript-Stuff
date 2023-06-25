// shorthand syntax

function personInfo(firstName, lastName, age) {
    let myObject = {
        firstName,
        lastName,
        age
    };

    return myObject;

}
console.log(personInfo("Peter",
"Pan",
"20"));
console.log(personInfo("George",
"Smith",
"18"));
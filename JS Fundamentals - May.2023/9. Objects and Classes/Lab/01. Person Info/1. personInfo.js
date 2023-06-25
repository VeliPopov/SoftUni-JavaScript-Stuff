function personInfo(firstName, lastName, age) {
    let myObject =  {};
    myObject.firstName = firstName;
    myObject.lastName = lastName;
    myObject.age = age;
    return myObject;

}
console.log(personInfo("Peter",
"Pan",
"20"));
console.log(personInfo("George",
"Smith",
"18"));
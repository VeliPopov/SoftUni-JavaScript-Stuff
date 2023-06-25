// Functions within a JavaScript object are called methods

let person = {
sayHello: function() {
console.log('Hi, guys');
}}

// ▪ We can define methods using several syntaxes:
let person1 = {
sayHello() {
console.log('Hi, guys');
}}

// ▪ We can add a method to an already defined object
let person2 = { name:'Peter', age: 20 };
person.sayHello = () => console.log('Hi, guys');

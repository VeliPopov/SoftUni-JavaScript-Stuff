// ▪ Classes can also have functions as property, called methods:

class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} says Woof!`);
        // this in the object refers to itself
    }
}
let dog = new Dog('Puncho');
dog.speak(); // Puncho says Woof!
// We access the method as a regular property
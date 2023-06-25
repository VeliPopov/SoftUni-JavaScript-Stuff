class Student {  // класът не е функция
    constructor(name) {   // конструторът е функция
        this.name = name;
    }
}
// Use the class keyword followed by a name
// The constructor is a special method for creating and initializing an object
let myStudent = new Student('Puncho');
myStudent.age = 7;  // добавяне на пропърти on runtime е възможно
let secondNewStudent = new Student('Divchov')

console.log(myStudent);
console.log(secondNewStudent);
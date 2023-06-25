function cats(params) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let cat of params) {
        let [name, age] = cat.split(' ');
        let newCat = new Cat(name, age);
        newCat.meow();
    }

}
cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])

// класът не може да бъде използван, преди да бъде инициализиран
// класовете не са като функциите - не се хойстват
// ако функциите се хойстват и могат да се изпълнят преди да се инициализират, то при класовете това не работи
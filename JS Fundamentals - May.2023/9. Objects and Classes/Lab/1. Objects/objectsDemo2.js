//* ▪ You can add and remove properties during runtime

let myObj = {
    name: 'Puncho',
    age: 7
}
myObj.energyLevel = 'Insane';

let key = 'name';

console.log(myObj.energyLevel);
console.log(myObj['age']);
console.log(myObj[key]); // чрез дефиниране на променлива, извикваме някакъв ключ от обикта

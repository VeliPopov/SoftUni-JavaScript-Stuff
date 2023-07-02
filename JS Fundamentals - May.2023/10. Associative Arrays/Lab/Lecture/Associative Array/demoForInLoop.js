// We can use for-in loop to iterate through the keys

let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;
for (let key in assocArr) {
    console.log(key + " = " + assocArr[key]);

}

// for in итерира по ключовете на обекта
// for in връща ключове
// for of връща стойности
// валидно е и за масиви и за обекти
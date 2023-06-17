let a = (x) => x + 2;

let result = a(10);
console.log(result);



let array = [1, 2, 3, 4, 5, 6, 78, 9]
array.sort(function (a, b) {
    return b - a;
})
console.log(array);


array.sort((a, b) => b - a);
// горния запис е еквивалентен на долния
array.sort(function (a,b) { return b - a});
array = array.map(x => x.toString());
// горния запис е еквивалентен на долния
array = array.map(function (x) { return x.toString()});
console.log(array);


let sorDec = (a,b) => b - a;
array.sort(sorDec);
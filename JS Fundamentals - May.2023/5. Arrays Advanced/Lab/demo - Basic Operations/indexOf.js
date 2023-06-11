function demo() {

    let array = [1, 2, 3, 4]

    array.unshift(10);

    console.log(array.indexOf(3, 1));
    // връща позицията (индекса) на търсения елемент

    console.log(array);
}
demo()


// indexOf() – returns the index where the given value is stored
//▪ Returns -1 if the value is not found
let myArray = ["Peter","George","Mary"];
myArray.indexOf("Mary"); // 2
myArray.indexOf("Nick"); // -1

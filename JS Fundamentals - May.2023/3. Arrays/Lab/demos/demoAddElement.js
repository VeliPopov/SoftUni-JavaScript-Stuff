// add an element to the end of the array:
function demo() {
    let arr = [10, 20, 30];
    arr[arr.length] = 40; // not a good practice
    console.log(arr); // [10, 20, 30, 40]
}
demo()


// built-in push method:
function demo() {
    let arr = [10, 20, 30, 40];
    arr.push(50); // Adds an element at the end
    arr.push(60); // Adds an element at the end
    arr.push(70); // Adds an element at the end
    console.log(arr); // [10, 20, 30, 40, 50]
}
demo()

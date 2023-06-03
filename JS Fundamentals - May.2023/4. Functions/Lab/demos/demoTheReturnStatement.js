// The return keyword immediately stops the function's execution
// Returns the specified value to the caller

function readFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const fullName = readFullName("John", "Smith");
console.log(fullName) //John Smith


// Return value can be:
// Assigned to a variable
let max = getMax(5, 10);
// let max = getMax(5, 10);
let total = getPrice() * quantity * 1.20;
// Passed to another function
multiply(getMax(5, 10), 20)

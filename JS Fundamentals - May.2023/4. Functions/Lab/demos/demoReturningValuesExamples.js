// Check if array index is valid:
function isValid(index, arr) {
    if (Number.isInteger(index) && index >= 0 && index < arr.length) {
        return true;
    } else {
        return false;
    }
}
console.log(isValid(2 [222, 17, 93, 67, 4, 83]));

// Does the student pass the exam:
function pass(grade) {
    return grade >= 3;
}
console.log(pass(5.22));
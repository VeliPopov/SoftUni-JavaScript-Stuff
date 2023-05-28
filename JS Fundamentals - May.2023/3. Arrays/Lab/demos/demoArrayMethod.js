// examples: push(), includes(), toString(), join(), .length
function demo() {
    let arr = [10, 20, 30, 40];

    console.log(arr.includes(20));
    // includes - връща булева стойност - прави проверка дали търсения елемент се съдържа в масива и връща резултат - истина или не
}
demo()

function demo() {
    let arr = [10, 20, 30, 40];

    console.log(arr.join('///'));
    // Create a string from all elements, separated by a given string
}
demo()

function demo() {
    // Create a string from all elements, separated by a given string
    let words = ["one", "two"];
    console.log(words.join(' - ')); // one - two
}
demo()
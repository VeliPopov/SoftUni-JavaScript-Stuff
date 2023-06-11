function demo() {

    let array = [1, 2, 3, 4]

    // проверява дали даден елемент се съдържа в определен масив
    // винаги връща булев резултта от изпълнението си - true или false
    console.log(array.includes(4, ));
    // търси от първия индекс ВКЛЮЧИТЕЛНО 
    // първото число (параметър) е търсения елемент, а второто е индекса от който да го търси

    console.log(array);
}
demo() 


// includes() – returns true if the given value is part of the array
let myArray = ["Peter","George","Mary"];
myArray.includes("George"); // true
myArray.includes("John"); // false
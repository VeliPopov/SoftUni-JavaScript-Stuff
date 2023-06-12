function searchForANumber(elementsArray, comandsArray) {

    let elementsToTake = comandsArray[0];
    let elementsToDelete = comandsArray[1];
    let searchedElement = comandsArray[2];

    let newArray = elementsArray.slice(0, elementsToTake);
    newArray.splice(0, elementsToDelete);
    let elementCounter = newArray.filter(e => e === searchedElement).length;
    // filter() метода връща масив и с .length взимаме всички елементи от масива, като ги филтрираме по зададен критерии

    console.log(`Number ${searchedElement} occurs ${elementCounter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])
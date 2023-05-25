function oldBooks(input) {
    let index = 0;

    let wantedBook = input[index];
    index++;

    let nextOperation = input[index];
    index++;

    let bookCounter = 0;
    let correctBoook = false;

    while (nextOperation !== 'No More Books') {
        if (nextOperation === wantedBook) {
            correctBoook = true;
            break;
        }

        bookCounter++;

        nextOperation = input[index];
        index++;
    }

    if (correctBoook === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    } else {
        console.log(`You checked ${bookCounter} books and found it.`);
    }


}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);
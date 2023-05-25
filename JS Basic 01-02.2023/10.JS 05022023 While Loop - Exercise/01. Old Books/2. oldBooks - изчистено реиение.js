function oldBooks(input) {
    let index = 0;

    let wantedBook = input[index];
    index++;

    let nextOperation = input[index];
    index++;

    let bookCounter = 0;

    while (nextOperation !== 'No More Books') {
        if (nextOperation === wantedBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }

        bookCounter++;

        nextOperation = input[index];
        index++;
    }

    if (nextOperation === 'No More Books') {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }

}
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);
function oldBooks(input) {
    let index = 0; //тук НЕ взимаш индекса, просто задаваш началото на цикъла 

    let wantedBook = input[index]; //input от 0 - вземи елемента от първия индекс
    index++; //подготви следващия индекс

    let nextOperation = input[index]; //input ot 1
    index++;// подготви следващия индекс

    let bookCounter = 0;

    //докато nextOperation е различно от 'No More Books'
    while (nextOperation !== 'No More Books') {
        if (nextOperation === wantedBook) { //ако nextOperation е = на търсената книга - намира си книгата
            console.log(`You checked ${bookCounter} books and found it.`);
            break; //без този бреак е ЗАДЪЛЖИТЕЛНО bookCounter-а и следващата nextOperation комнада да е в else
        }

        bookCounter++; //брояча на книгите, които е проверила, като има знаечие къде е поставен, спрямо условието на задачата (плюс примерите)
        //тук е сложен, тъй като не е нужно да се знае колко общо книги е проверил, а само проверените преди да намери търсената (без да брои нея)
        nextOperation = input[index]; //продължава търсенето, докато не я намери или не получи комнда да спре търсенето
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
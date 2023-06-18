function schoolLibrary(params) {
    let shelf = params.shift().split('&');

    for (let commandLine of params) {
        if (commandLine === 'Done') {
            break;
        }

        let [command, book1, book2] = commandLine.split(' | ');

        switch (command) {
            case "Add Book":
                if (!shelf.includes(book1)) {
                    shelf.unshift(book1);
                }
                break;

            case "Take Book":
                if (shelf.includes(book1)) {
                    shelf = shelf.filter(b => b !== book1);
                }
                break;
                
            case "Swap Books":
                if (shelf.includes(book1) && shelf.includes(book2)) {
                    let index1 = shelf.indexOf(book1);
                    let index2 = shelf.indexOf(book2);
                    [shelf[index1], shelf[index2]] = [shelf[index2], shelf[index1]];
                }
                break;

            case "Insert Book":
                shelf.push(book1);
                //? chek like in case "Add Book"?
                break;

            case "Check Book":
                let index = Number(book1);
                if (index >= 0 && index < shelf.length) {
                    console.log(shelf[index]);
                }
                break;
        }
    }
    console.log(shelf.join(", "));
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"])
schoolLibrary(["War and Peace&Hamlet&Ulysses&MadameBovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])

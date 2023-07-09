function countStringOccurrences(text, word) {

    let string = text.split(' ');
    let count = 0;

    for (let element of string) {
        if (element === word) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');

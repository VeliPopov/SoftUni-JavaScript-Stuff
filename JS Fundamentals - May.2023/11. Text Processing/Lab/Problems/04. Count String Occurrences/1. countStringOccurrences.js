function countStringOccurrences(text, word) {

    let words = text.toLowerCase().split(' ');
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word.toLowerCase()) {
            count++;
        }
    } 

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');

function stringSubstring(word, text) {

    let words = text.toLowerCase().split(' ');

    for (let index = 0; index < words.length; index++) {
        if (words[index] === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}


stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language'); 
function censoredWords(text, word) {

    let asterisks = '*'.repeat(word.length);
    let words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            words[i] = asterisks;
        }
    } 

    let result = words.join(' ');
    console.log(result);
}

censoredWords('A small sentence with some words', 'small'); 
censoredWords('Find the hidden word', 'hidden');

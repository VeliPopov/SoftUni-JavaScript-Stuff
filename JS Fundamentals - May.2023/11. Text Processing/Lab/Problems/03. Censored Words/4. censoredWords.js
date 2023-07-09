function censoredWords(text, word) {

    let result = text.split(word);

    console.log(result.join('*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');
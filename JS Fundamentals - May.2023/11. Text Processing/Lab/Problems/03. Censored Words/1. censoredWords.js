// with regex

function censoredWords(text, word) {

    let wordLength = word.length;
    let asterisks = '*'.repeat(wordLength);
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let result = text.replace(regex, asterisks);
    console.log(result);
} 

censoredWords('A small sentence with some words', 'small'); 
censoredWords('Find the hidden word', 'hidden'); 

function revealWords(wordsString, templatesString) {

    let wordsArray = wordsString.split(', ');

    for (const word of wordsArray) {
        
        let  wordsFromStars = '*'.repeat(word.length);
        templatesString = templatesString.replace(wordsFromStars, word);
    }

    console.log(templatesString);

}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');

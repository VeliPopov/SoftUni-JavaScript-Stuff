function hashTag(inputString) {

    let words = inputString.split(' ');

    let specialWords = words.filter(word => {
        if (word.startsWith('#') && word.length > 1) {
            let wordWithoutHash = word.slice(1);
            // check if the word contains only letters
            return wordWithoutHash.split('').every(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
        }
        return false;
    });

    specialWords.forEach(word => console.log(word.slice(1))); // Print the special word without '#'
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');

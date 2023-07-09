function hashTag(inputString) {

    let words = inputString.split(' '); //array

    for (const word of words) {

        if (word[0] === '#' && word.length > 1) {
            // намира всички думи с # към тях, като игнорира самотните # символи
            let wordWithoutHash = word.split('');
            wordWithoutHash.shift();
            // премахва #

            let output = '';

            for (const char of wordWithoutHash) {
                if (!isNaN(char)) {
                    output = '';
                    break;
                } else {
                    output += char;
                }
            }
            if (output.length > 0) {
                console.log(output);
            }
        }

    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
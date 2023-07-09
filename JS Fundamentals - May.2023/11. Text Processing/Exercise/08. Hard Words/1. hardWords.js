//FIXME: fix later

function hardWords(input) {

    let letter = input[0].split(' ');
    let words = input[1];

    for (let i = 0; i < letter.length; i++) {
        if (letter[i].includes('_')) {
            let holeLength = letter[i].length;
            

            for (let word of words) {
                if (word.length === holeLength) {
                    letter[i] = word;
                    break;
                }
            }
        }
    }

    console.log(letter.join(' '));
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

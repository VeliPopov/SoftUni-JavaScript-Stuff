//TODO: not my solution - revise it later!
//FIXME: there must be another more adequate solution

function trippleLetters(param) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let char1 = 0; char1 < param; char1++) {
        for (let char2 = 0; char2 < param; char2++) {
            for (let char3 = 0; char3 < param; char3++) {
                console.log(`${letters.charAt(char1)}${letters.charAt(char2)}${letters.charAt(char3)}`);
            }
        }
    }
}

trippleLetters(3); 
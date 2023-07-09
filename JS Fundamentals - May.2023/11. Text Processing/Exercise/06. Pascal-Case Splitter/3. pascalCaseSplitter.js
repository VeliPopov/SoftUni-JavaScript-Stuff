function splitPascalCase(string) {

    let words = [];
    let element = 0;

    for (let index = 1; index < string.length; index++) {

        if (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) {
            words.push(string.substring(element, index));
            element = index;
        }

    }
    words.push(string.substring(element, string.length));
    console.log(words. join(', '));


}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitPascalCase('HoldTheDoor');
splitPascalCase('ThisIsSoAnnoyingToDo'); 
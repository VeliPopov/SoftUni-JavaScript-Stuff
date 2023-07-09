function splitPascalCase(string) {
    
    let words = [];
    let currentWord = string[0];

    for (let index = 1; index < string.length; index++) {
        if (string[index] === string[index].toUpperCase()) {
            words.push(currentWord);
            currentWord = string[index];
        } else {
            currentWord += string[index];
        }
    }

    words.push(currentWord);
    return words.join(', ');
}

console.log(splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan'));  
console.log(splitPascalCase('HoldTheDoor'));  
console.log(splitPascalCase('ThisIsSoAnnoyingToDo')); 
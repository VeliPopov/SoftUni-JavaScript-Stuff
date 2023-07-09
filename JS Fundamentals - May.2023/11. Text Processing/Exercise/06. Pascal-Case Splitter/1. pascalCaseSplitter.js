// with regex

function splitPascalCase(string) {
    
    let words = string.match(/([A-Z][a-z]*)/g);
    return words.join(', '); 
}

console.log(splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan'));  
console.log(splitPascalCase('HoldTheDoor'));  
console.log(splitPascalCase('ThisIsSoAnnoyingToDo'));  

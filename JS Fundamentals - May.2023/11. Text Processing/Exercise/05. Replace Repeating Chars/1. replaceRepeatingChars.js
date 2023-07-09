//with regex

function replaceRepeatingChars(string) {
    return string.replace(/(.)\1+/g, '$1'); 
}

console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));  
console.log(replaceRepeatingChars('qqqwerqwecccwd'));  

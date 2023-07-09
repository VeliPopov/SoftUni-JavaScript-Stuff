function replaceRepeatingChars(string) {

    let result = '';
    
    for (let index = 0; index < string.length; index++) {
        if (string[index] !== string[index + 1]) {
            result += string[index];
        }
    }
    return result;
}

console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));  
console.log(replaceRepeatingChars('qqqwerqwecccwd'));
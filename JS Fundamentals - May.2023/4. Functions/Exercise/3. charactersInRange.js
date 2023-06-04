function charactersInRange(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt()); // с Math.min взима по-малката стойност на ascii кода на зададения параметър и го записва в променливата
    let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt()); // с Math.max взима по-голямата стойност на ascii кода на зададения параметър и го записва в променливата

    let charArray = [];

    for (let currentChar = startChar + 1; currentChar < endChar; currentChar++) {
        charArray.push(String.fromCharCode(currentChar));  // в масива push-ваме получената число от кода, но като преобразувано като символ 
    }

    return charArray.join(' ') // резултата се join-ва по спейс в стринг
}
console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));
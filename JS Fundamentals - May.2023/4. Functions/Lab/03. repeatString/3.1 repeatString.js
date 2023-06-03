function repeatString(str, times) {

    let output = '';
    for (let index = 0; index < times; index++) {
        output += str;
        
    }
    return output;
}
let resultFromFunction = repeatString("abc", 3)
console.log(resultFromFunction)

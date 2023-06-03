function repeatString(str, times) {

    let output = '';
    for (let index = 0; index < times; index++) {
        output += str;
        
    }
    return output;
}
console.log(repeatString("abc", 3))
console.log(repeatString("String", 2))
function replaceRepeatingChars(string) {

    let output = string[0]; //abcdedsa
    let stringLength = string.length;

    for (let index = 1; index < stringLength; index++) {

        let currentElement = string[index];
        let prevElement = string[index - 1];

        if (currentElement !== prevElement) {
            output += currentElement;
        }

    }
    console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');
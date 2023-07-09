function textTest(inputString, start, count) {
    
    let result = inputString.substring(start, start + count);
    console.log(result);
}

textTest('ASentence', 1, 8);
textTest('SkipWord', 4, 7);

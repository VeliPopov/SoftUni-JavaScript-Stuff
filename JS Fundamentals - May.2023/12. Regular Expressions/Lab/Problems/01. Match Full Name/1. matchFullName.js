function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = input.match(pattern);
    
    if (validNames) {
        console.log(validNames.join(' '));
    }
}

let text = 'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov';
matchFullName(text);



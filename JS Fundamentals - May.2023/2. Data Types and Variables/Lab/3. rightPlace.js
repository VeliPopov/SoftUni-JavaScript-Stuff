function rightPlace(str1, char, str2) {
    
    let newText = str1.replace('_', char)
    
    if (newText === str2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String')

//две решения с идентичен резултат:

function rightPlace(str1, char, str2) {
    
    let newText = str1.replace('_', char)
    let result = newText === str2 ? 'Matched' : 'Not Matched';
    console.log(result);
      
}
rightPlace('Str_ng', 'i', 'String')
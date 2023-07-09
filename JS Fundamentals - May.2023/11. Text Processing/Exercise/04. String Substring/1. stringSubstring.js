function stringSubstring(word, text) {
    
    word = word.toLowerCase();
    text = text.toLowerCase();

    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(word + " not found!");
    }
}

//! в някои случаи това решение не работи
// вероятно ако думата е част от друга дума, повтаря се в дадено изречение, или е комбинация от букви и цифри

stringSubstring('javascript', 'JavaScript is the best programming language');  
stringSubstring('python', 'JavaScript is the best programming language');  

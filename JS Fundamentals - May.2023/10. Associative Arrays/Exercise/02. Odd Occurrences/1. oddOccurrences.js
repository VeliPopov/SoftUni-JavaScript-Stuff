function oddOccurrences(params) {

    let words = params.toLowerCase().split(' ');
    let wordCounts = {};

    for (let word of words) {
        if (!wordCounts[word]) {
            wordCounts[word] = 0;
        } 
        wordCounts[word]++;
        
    }

    let result = [];
    words.forEach(word => {
        if(wordCounts[word] % 2 !== 0 && !result.includes(word)) {
            result.push(word);
        }
    });
    

    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

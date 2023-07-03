function oddOccurrences(data) {

    let words = data.split(' ').map(e => e.toLowerCase());
    let wordCounts = {};

    for (let word of words) {
        if (!wordCounts.hasOwnProperty(word)) {
            wordCounts[word] = 0;

        }
        wordCounts[word]++;
    }
    let arrayOfOddElements = Object.entries(wordCounts).filter(double => double[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);

    let output = '';

    for (let array of arrayOfOddElements) {
        output += `${array[0]} `;
    }
    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
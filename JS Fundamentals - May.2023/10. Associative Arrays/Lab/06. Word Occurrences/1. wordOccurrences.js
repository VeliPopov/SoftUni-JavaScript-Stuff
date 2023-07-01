function wordOccurrences(params) {

    let words = new Map();

    for (let line of params) {
        let wordsInLine = line.split(' ');

        for (let word of wordsInLine) {
            if (!words.has(word)) {
                words.set(word, 0);
            }
            let oldCount = words.get(word);
            words.set(word, oldCount + 1);
        }
    }

    let sortedWords = Array.from(words).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad",
    "boys", "ginger"])

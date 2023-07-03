function wordsTracker(input) {
    let wordsToCount = input[0].split(' ');
    let text = input.slice(1);

    let wordCounts = new Map();

    // initialize the map with words to count
    for (let word of wordsToCount) {
        wordCounts.set(word, 0);
    }

    // count the occurrences
    for (let word of text) {
        if (wordCounts.has(word)) {
            let currentCount = wordCounts.get(word);
            wordCounts.set(word, currentCount + 1);
        }
    }

    // convert the map to an array and sort
    let sorted = Array.from(wordCounts).sort((a, b) => b[1] - a[1]);

    // print the result
    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
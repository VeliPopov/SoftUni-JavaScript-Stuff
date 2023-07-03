function wordsTracker(data) {

    let wordsToCount = data[0].split(' ');
    let text = data.slice(1);

    let wordCounts = {};

    // initialize the object with words to count
    for (let word of wordsToCount) {
        wordCounts[word] = 0;
    }

    // count the occurrences
    for (let word of text) {
        if (word in wordCounts) {
            wordCounts[word]++;
        }
    }

    // sort the object entries by count
    let sorted = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

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
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'])

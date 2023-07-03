function wordsTracker(data) {

    //solution with Map
    let map = new Map();

    let wordsToCount = data.shift().split(' ');

    wordsToCount.forEach(word => {
        map.set(word, 0);
    });

    for (let text of data) {
        for (let word of wordsToCount) {

            if (text === word) {
                let currentQuantity = map.get(text);
                map.set(text, currentQuantity + 1)
            }
        }

    }
    let sorted = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]);

    sorted.forEach(element => {
        console.log(`${element.join(' - ')} `);
        // console.log(`${element[0]} - ${element[1]}`)
    })
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
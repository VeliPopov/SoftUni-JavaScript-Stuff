function mirrorWords(input) {

    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    let matches;
    let wordPairs = [];
    let foundMirrorWords = [];

    while ((matches = pattern.exec(input)) !== null) {
        wordPairs.push(matches);
    }

    if (wordPairs.length === 0) {
        console.log("No word pairs found!");
        return;
    }

    console.log(`${wordPairs.length} word pairs found!`);

    for (let pair of wordPairs) {
        let word1 = pair[2];
        let word2 = pair[3];

        if (word1 === word2.split('').reverse().join('')) {
            foundMirrorWords.push(word1 + ' <=> ' + word2);
        }
    }

    if (foundMirrorWords.length > 0) {

        console.log("The mirror words are:");
        console.log(foundMirrorWords.join(', '));
        
    } else {
        console.log("No mirror words!");
    }
}

mirrorWords(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])

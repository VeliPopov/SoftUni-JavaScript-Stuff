function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for(let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;
        let sum = 0;
        
        for(let j = start; j <= end; j++) {
            sum += sequence[j];
        }
        sequence[i] = sum;
    }
    console.log(sequence.join(' '));
}

lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)

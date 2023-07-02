// ▪ The entries array can be sorted, using a Compare function
// ▪ To sort by key, use the first element of each entry
// ▪ You can also destructure the entries

entries.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
    // Perform comparison and return negative, 0 or positive
});
entries.sort(([keyA, valueA], [keyB, valueB]) => {
    // Perform comparison and return negative, 0 or positive
});

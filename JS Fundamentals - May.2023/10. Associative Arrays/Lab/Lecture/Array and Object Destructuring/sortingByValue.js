// ▪ To sort by value, use the second element of each entry
// ▪ You can also destructure the entries

entries.sort((a, b) => {
    valueA = a[1];
    valueB = b[1];
    // Perform comparison and return negative, 0 or positive
});
entries.sort(([keyA, valueA], [keyB, valueB]) => {
    // Perform comparison and return negative, 0 or positive
});

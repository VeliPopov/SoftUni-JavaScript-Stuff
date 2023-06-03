// Does not receive arguments when invoked
// The result is always the same (unless it reads data from outside)

function printHeader() {
    console.log('~~~- {@} -~~~');
    console.log('~- Certificate -~');
    console.log('~~~- ~---~ -~~~');
}
printHeader(); // Output is always the same

// Functions are first declared, then invoked (many times)
function hLine() {
    console.log("----------");
    }

    
// Functions can be invoked (called) by their name
hLine();


// Invocation from another function:
function printDocument() {
    printLabel();
    printContent();
    }

    
// Self-invocation (recursion):
function countDown(x) {
    console.log(x);
    if (x > 0) { countDown(x - 1); }
    }
    
const regex = /\d{1,2}-[a-zA-Z]{3}-\d{4}/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('\\d{1,2}-[a-zA-Z]{3}-\\d{4}', 'g')

const str = `I am born on 30-Dec-1994.
My father is born on the 9-Jul-1955.
01-July-2000 is not a valid date.

`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

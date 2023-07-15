const regex = /\w+/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('\\w+', 'g')

const str = `_ (Underscores) are 
also word characters!
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

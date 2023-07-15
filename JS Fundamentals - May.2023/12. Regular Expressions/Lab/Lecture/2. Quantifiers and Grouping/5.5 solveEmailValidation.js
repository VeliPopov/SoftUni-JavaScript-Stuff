const regex = /^[a-zA-Z]{1}[a-zA-Z0-9_.]*@[a-z]+\.[a-z]+$/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('^[a-zA-Z]{1}[a-zA-Z0-9_.]*@[a-z]+\\.[a-z]+$', 'gm')

const str = `valid123@email.bg
valid.dsadaad@email.com
invalid*name@emai1.bg

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

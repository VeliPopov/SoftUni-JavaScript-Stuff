// ▪ In JS you construct a regular expression in one of two ways:
// ▪ Regular Expression Literal
// ▪ The constructor function RegExp

// Provides compilation when the script is loaded
let regLiteral = /[A-Za-z]+/g
// Provides runtime compilation
// Used when the pattern is from another source
let regExp = new RegExp('[A-Za-z]+', 'g');
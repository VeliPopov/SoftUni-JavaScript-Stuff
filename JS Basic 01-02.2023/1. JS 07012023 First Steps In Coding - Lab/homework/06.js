// "You are <firstName> <lastName>, a <age>-years old person from <town>."

function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`);

}
concatenateData(["William", "Puchov", "8", "Sofia"]);
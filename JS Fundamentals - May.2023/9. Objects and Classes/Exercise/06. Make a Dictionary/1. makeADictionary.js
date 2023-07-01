function makeADictionary(params) {
    let dictionary = {};

    for (let line of params) {
        let parsedObject = JSON.parse(line);
        let term = Object.keys(parsedObject)[0];
        let description = parsedObject[term];

        dictionary[term] = description;
    }

    let sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burninga pparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, ransmitted, or recorded."}'
]);
makeADictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweetfood made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds(or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such asainting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
])
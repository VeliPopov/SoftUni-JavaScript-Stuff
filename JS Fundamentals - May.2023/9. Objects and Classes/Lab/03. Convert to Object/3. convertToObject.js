function convertToObject(jsonString) {
    
    let object = JSON.parse(jsonString);
    
    for (let key of Object.keys(object)) {
        console.log(`${key}: ${object[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
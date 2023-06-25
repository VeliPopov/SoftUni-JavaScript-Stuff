function convertToObject(jsonString) {
    
    let object = JSON.parse(jsonString);
    
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
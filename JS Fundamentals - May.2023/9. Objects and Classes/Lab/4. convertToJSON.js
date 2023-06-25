function convertToJson(name, lastName, hairColor) {
    let object = {
        name,
        lastName,
        hairColor
    }
    let jsonString = JSON.stringify(object);

    console.log(jsonString);

}
convertToJson('George', 'Jones', 'Brown')
convertToJson('Peter', 'Smith', 'Blond')
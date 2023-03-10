function convertToObject(jsonString){
    let person = JSON.parse(jsonString);

    let keys = Object.entries(person)
    for (const [ key, value] of keys) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
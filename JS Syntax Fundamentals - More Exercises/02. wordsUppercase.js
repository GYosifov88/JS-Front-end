function wordsUppercase(text){
    let textArray = text.split(/[^a-zA-Z0-9_]/g)
    let newArray = []
    textArray.forEach(element => {
        if (element.length > 0){
            newArray.push(element.toUpperCase());
        }
    });
    
    console.log(newArray.join(', '));
}

wordsUppercase('Hi, how are you?');

wordsUppercase('hello');
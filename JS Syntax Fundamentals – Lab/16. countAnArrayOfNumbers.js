function countString(text, searchedWord){
    let count = 0;
    let textWords = text.split(' ');
    for (let word of textWords){
        if (searchedWord === word){
            count +=1;
        }
    }

    console.log(count);
}

countString('This is a word and it also is a sentence', 'is')

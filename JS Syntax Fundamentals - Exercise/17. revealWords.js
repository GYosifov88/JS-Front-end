function revealWords(words, sentence){
    let wordArray = words.split(', ');

    for (const el of wordArray){
        let searched = '*'.repeat(el.length);
        if (sentence.includes(searched)){
            sentence = sentence.replace(searched, el);
        }
    }
    console.log(sentence);
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)
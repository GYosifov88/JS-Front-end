function wordsTracker(data){
    let searchedWords = data[0].split(' ');
    let countingWords = {};
    for (let k = 0; k<searchedWords.length; k++){
        let searchedWord = searchedWords[k];
        countingWords[searchedWord] = 0;
        for (let i = 1; i<data.length; i++){
            let currWord = data[i];
            if(searchedWord === currWord){
                countingWords[searchedWord] += 1;
            }
        }
    }

    let sortedCounting = Object.entries(countingWords)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
    
    
    for (const key in sortedCounting) {
        console.log(`${key} - ${sortedCounting[key]}`);
    }  
    
}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']    
)

wordsTracker(
    [
        'this sentence', 
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)
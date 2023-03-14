function oddOccurrences(data){
    let oddOccurr = [];
    let wordsList = data.split(' ')
    let counter = 0;
    for (let k = 0; k<wordsList.length; k++){
        let searchedWord = wordsList[k].toLowerCase();
        // let counter = 1;
        for (let i = 0; i<wordsList.length; i++){
            let currWord = wordsList[i].toLowerCase();
            if(searchedWord === currWord){
                counter++;
            }
        }
        if (counter % 2 !== 0){
            oddOccurr.push(searchedWord);
            counter = 0;
        }
    }
    oddOccurr = [...new Set(oddOccurr)]
    console.log(oddOccurr.join(' '));
}


oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
function pianist(data){
    class Piece {
        constructor(piece, composer, key){
            this.piece = piece;
            this.composer = composer;
            this.key = key; 
            return {
                piece: this.piece,
                composer: this.composer,
                key: this.key
            }          
        }
    }
    
    let collection = [];

    for (const item of data.splice(1, data[0])) {
        let [piece, composer, key] = item.split('|');
        
        collection.push(new Piece(piece, composer, key));
    }

    for (let i = 1; i < data.length; i++){
        let action = data[i].split('|')[0];
        if (action === 'Add'){
            let song = data[i].split('|')[1];
            let author = data[i].split('|')[2];
            let key = data[i].split('|')[3];
            if (!checkIfIn(song)){
                collection.push(new Piece(song, author, key));
                console.log(`${song} by ${author} in ${key} added to the collection!`);
            }else{
                console.log(`${song} is already in the collection!`);
            }
        }else if(action === 'Remove'){
            let song = data[i].split('|')[1];
            if(!checkIfIn(song)){
                console.log(`Invalid operation! ${song} does not exist in the collection.`);
            }else{
                collection = collection.filter(item => item.piece !== song)
                console.log(`Successfully removed ${song}!`);
            }
        }else if (action === 'ChangeKey'){
            let song = data[i].split('|')[1];
            let newKey = data[i].split('|')[2];
            if (!checkIfIn(song)){
                console.log(`Invalid operation! ${song} does not exist in the collection.`);
            }else{
                for (const item of collection) {
                    if (song === item.piece){
                        item.key = newKey;
                    }
                }
                console.log(`Changed the key of ${song} to ${newKey}!`);
            }
        }else if (action === 'Stop'){
            for (const item of collection) {
                console.log(`${item.piece} -> Composer: ${item.composer}, Key: ${item.key}`);
            }
        }
    }
    

    function checkIfIn(pieceGiven){
        for (const item of collection) {
            if (pieceGiven === item.piece){
                return item;
            }
        }
    }
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]         
)
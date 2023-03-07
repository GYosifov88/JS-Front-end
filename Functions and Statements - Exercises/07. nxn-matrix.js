function matrix(num){
    let array = [];
    for (let i = 0; i < num; i++){
        array.push([]);
        for (let j = 0; j < num; j++){
            array[i].push(num);
        }
    }

    for (let k = 0; k < array.length; k++){
        console.log(...array[k]);
    }
}

matrix(7)




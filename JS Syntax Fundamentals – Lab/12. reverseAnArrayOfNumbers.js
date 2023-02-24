function reverseArray(num, array){
    let newArray = [];
    for (let i=0; i < num; i++){
        newArray.push(array[i]);
    }
    newArray = newArray.reverse();
    let result = '';
    for (let i=array.length-1; i>=0; i--){
        result = newArray.join(' ');
    }
    console.log(result);
}

reverseArray(2, [66, 43, 75, 89, 47])
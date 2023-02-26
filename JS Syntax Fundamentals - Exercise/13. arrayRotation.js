function arrayRotation(array, rotations){
    for (let i=1; i <=rotations; i++){
        let num = array.shift();
        array.push(num);
    }
    console.log(array.join(' '));
}

arrayRotation([2, 4, 15, 31], 5)
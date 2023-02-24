function substraction(array){
    let oddSum = 0;
    let evenSum = 0;
    for (let i=0; i<=array.length - 1; i++){
        let currNum = array[i];
        if (currNum % 2 === 0){
            evenSum += currNum;
        }else{
            oddSum += currNum;
        }
    }
    let finalSum = evenSum - oddSum
    console.log(finalSum);
}

substraction([1,2,3,4,5,6])
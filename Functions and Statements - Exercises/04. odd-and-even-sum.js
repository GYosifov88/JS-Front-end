function oddAndEvenSum(number){
    let strNums = number.toString().split('');
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < strNums.length; index++) {
        const num = strNums[index];
        if (num % 2 === 0){
            evenSum += Number(num);
        }else{
            oddSum += Number(num);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234)
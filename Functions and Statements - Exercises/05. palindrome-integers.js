function palindromeIntegers(numbers){
    for (let i = 0; i < numbers.length; i++){
        let currNum = numbers[i].toString();
        let revNum = currNum.split('').reverse().join('');
        if (currNum === revNum){
            console.log('true');
        }else{
            console.log('false');
        }
    }
}

palindromeIntegers([32,2,232,1010]);

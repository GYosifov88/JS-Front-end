function sumDigits(num){
    let digits = Array.from(num.toString()).map(Number);
    let sum = 0;
    for (let i=0; i<digits.length; i++){
        sum += digits[i];
    }
    console.log(sum);
}

sumDigits(97561)
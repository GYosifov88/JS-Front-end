function numberModification(number){
    let numArray = number.toString().split('');
    let digits = numArray.map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);

    if (sum / digits.length > 5){
        console.log(digits.join(''));
    }

    while (sum / digits.length < 5) {
        digits.push(9);
        sum += 9;
        if (sum / digits.length > 5){
            console.log(digits.join(''));
            break;
        }
    }
}

numberModification(101);

numberModification(5835);
function mathOperations(firstNum, secondNum, operator){
    let sum;
    if (operator === '+'){
        sum = firstNum + secondNum;
        console.log(sum);
    }else if (operator === '-'){
        sum = firstNum - secondNum;
        console.log(sum);
    }else if (operator === '*'){
        sum = firstNum * secondNum;
        console.log(sum);
    }else if (operator === '/'){
        sum = firstNum / secondNum;
        console.log(sum);
    }else if (operator === '%'){
        sum = firstNum % secondNum;
        console.log(sum);
    }else if (operator === '**'){
        sum = firstNum ** secondNum;
        console.log(sum);
    }
}

mathOperations(3, 5.5, '*')
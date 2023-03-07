function simpleCalculator(firstNum, secondNum, operator){
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    const calculate = {
        multiply: multiply,
        divide: divide,
        add: add,
        subtract: subtract
    }

    return calculate[operator](firstNum, secondNum)
}

console.log(
    simpleCalculator(5,5,'multiply')
    );

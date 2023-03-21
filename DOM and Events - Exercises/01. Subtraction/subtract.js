function subtract() {
    const firstInput = document.getElementById('firstNumber');
    const secondInput = document.getElementById('secondNumber');
    const resultInput = document.getElementById('result');
    let firstNum = Number(firstInput.value);
    let secondNum = Number(secondInput.value);
    let final = firstNum - secondNum;
    resultInput.textContent = final;
}
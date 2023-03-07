
// ---- Option 1 ----

// function addAndSubtract(firstNum, secondNum, thirdNum){
//     let sum = firstNum + secondNum;
    
//     let final = sum - thirdNum;

//     return final;
// }


// ---- Option 2 ----

function addAndSubtract(firstNum, secondNum, thirdNum){
    function sum(a, b){
        return a + b;
    }

    function subtract(a, b, c){
        return sum(a, b) - c;
    }

    return subtract(firstNum, secondNum, thirdNum);
}


// ---- Option 3 ----

// function addAndSubtract(num1, num2, num3) {
//     let sum = (a, b) => a + b;
//     let subtract = (a, b, c) => sum(a, b) - c;
//     return subtract(num1, num2, num3);
//   }


console.log(addAndSubtract(23,6,10));

function cooking(num, ...operations){
    let initialNum = Number(num);
    let operators = [...operations];
    let operator;
    for (let i=0; i<operators.length; i++){
        operator = operators[i];
        if (operator === 'chop'){
            initialNum = initialNum / 2;
        }else if (operator === 'dice'){
            initialNum = Math.sqrt(initialNum);
        }else if (operator === 'spice'){
            initialNum = initialNum + 1;
        }else if (operator === 'bake'){
            initialNum = initialNum * 3;
        }else if (operator === 'fillet'){
            initialNum = initialNum - (initialNum * 0.2);
        }
        console.log(initialNum);
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
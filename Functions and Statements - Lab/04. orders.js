function orders(order, quantity) {
    let totalPrice = 0;
    if (order === 'coffee'){
        totalPrice = quantity * 1.50;
    }else if (order === 'water'){
        totalPrice = quantity * 1.00;
    }else if (order === 'coke'){
        totalPrice = quantity * 1.40;
    }else if (order === 'snacks'){
        totalPrice = quantity * 2.00;
    }
    
    console.log(totalPrice.toFixed(2));
}

orders("water", 5)
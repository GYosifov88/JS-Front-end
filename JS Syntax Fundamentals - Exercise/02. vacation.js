function vacation (numOfPeople, groupType, day){
    let totalPrice = 0;
    if (day === 'Friday'){
        if (groupType === 'Students'){
            totalPrice = numOfPeople * 8.45;
            if (numOfPeople >=30){
                totalPrice -= totalPrice * 0.15;
            }
        }else if (groupType === 'Business'){
            if (numOfPeople >=100){
                totalPrice =(numOfPeople - 10) * 10.90;
            }else{
                totalPrice = numOfPeople * 10.90;
            }
        }else if (groupType === 'Regular'){
            totalPrice = numOfPeople * 15;
            if (numOfPeople >=10 && numOfPeople <=20){
                totalPrice -= totalPrice * 0.05;
            }
        }
    }else if (day === 'Saturday'){
        if (groupType === 'Students'){
            totalPrice = numOfPeople * 9.80;
            if (numOfPeople >=30){
                totalPrice -= totalPrice * 0.15;
            }
        }else if (groupType === 'Business'){
            if (numOfPeople >=100){
                totalPrice =(numOfPeople - 10) * 15.60;
            }else{
                totalPrice = numOfPeople * 15.60;
            }
        }else if (groupType === 'Regular'){
            totalPrice = numOfPeople * 20;
            if (numOfPeople >=10 && numOfPeople <=20){
                totalPrice -= totalPrice * 0.05;
            }
        }
    }else if (day === 'Sunday'){
        if (groupType === 'Students'){
            totalPrice = numOfPeople * 10.46;
            if (numOfPeople >=30){
                totalPrice -= totalPrice * 0.15;
            }
        }else if (groupType === 'Business'){
            if (numOfPeople >=100){
                totalPrice =(numOfPeople - 10) * 16;
            }else{
                totalPrice = numOfPeople * 16;
            }
        }else if (groupType === 'Regular'){
            totalPrice = numOfPeople * 22.50;
            if (numOfPeople >=10 && numOfPeople <=20){
                totalPrice -= totalPrice * 0.05;
            }
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"    
    )
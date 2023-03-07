function perfectNumber(number){
    let divisorsSum = 0;

    for (let i = 1; i <= number / 2; i++){
        if (number % i === 0){
            divisorsSum += i;
        }
    }

    if (divisorsSum === number && divisorsSum !==0){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);

perfectNumber(28);

perfectNumber(1236498);
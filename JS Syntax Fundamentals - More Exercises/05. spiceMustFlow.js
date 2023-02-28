function spiceMustFlow(startYield){
    let days = 0;
    let exhausted = false;
    let gatheredYield = 0;

    while (startYield >= 100) {
        days++;
        gatheredYield += startYield - 26;
        startYield -= 10;
        if (startYield < 100){
            exhausted = true;
            gatheredYield -= 26;
            break;
        }
    }
    console.log(days);
    console.log(gatheredYield);
}

spiceMustFlow(111);

spiceMustFlow(450);
function bitcoinMining(array) {
    let days = 0;
    let amount = 0;
    let bitcoins = 0;
    let firstDayOfPurchase = 0;

    for (let i = 0; i < array.length; i++) {
        let goldAmount = array[i];
        days++;
        if (days % 3 === 0){
            goldAmount -= goldAmount * 0.3;
        }
        amount += goldAmount * 67.51;
        if (amount >= 11949.16){
            if (firstDayOfPurchase === 0){
                firstDayOfPurchase = days;
            }
            while (amount >= 11949.16){
                bitcoins++;
                amount -= 11949.16;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`);
    }
    console.log(`Left money: ${amount.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124])

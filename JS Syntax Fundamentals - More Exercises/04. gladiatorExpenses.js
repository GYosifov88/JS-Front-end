function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
    let shieldBrakesCount = 0;
    let helmetBrakesCount = 0;
    let swordBrakesCount = 0;
    let armorBrakesCount = 0;
    let brokenShields = 0;

    for (let i = 1; i <= lostFights; i++){
        if (i % 2 === 0){
            helmetBrakesCount++;
        }
        if (i % 3 === 0){
            swordBrakesCount++;
        }
        if (i % 3 === 0 && i % 2 === 0){
            shieldBrakesCount++;
            brokenShields++;
            if (brokenShields % 2 === 0){
                armorBrakesCount++;
            }
        }
    }

    expenses = (shieldBrakesCount * shieldPrice) + (helmetBrakesCount * helmetPrice) + (swordBrakesCount * swordPrice) + (armorBrakesCount * armorPrice)
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200    
    )

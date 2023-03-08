function carWash(actions){
    let cleanliness = 0;
    actions.forEach(element => {
        if (element === 'soap'){
            cleanliness += 10;
        }else if (element === 'water'){
            cleanliness += cleanliness * 0.2;
        }else if (element === 'vacuum cleaner'){
            cleanliness += cleanliness * 0.25;
        }else if (element === 'mud'){
            cleanliness -= cleanliness * 0.1;
        }
    });

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
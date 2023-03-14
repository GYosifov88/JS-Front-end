function storeProvision(currentStock, orderedStock){
    let storeData = {};
    for (let i = 0; i < currentStock.length; i+=2) {
        storeData[currentStock[i]] = Number(currentStock[i+1]);
    }

    for (let i = 0; i < orderedStock.length; i+=2) {
        if (!storeData.hasOwnProperty(orderedStock[i])){   // checking if key already exist in object
            storeData[orderedStock[i]] = Number(orderedStock[i+1]);
        }else{
            storeData[orderedStock[i]] += Number(orderedStock[i+1]);
        }
    }

    for (const key in storeData) {
        console.log(`${key} -> ${storeData[key]}`);
    }  
}


storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]    
)
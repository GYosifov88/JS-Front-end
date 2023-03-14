function piccolo(data){
    let parking = [];

    for (const item of data) {
        let [movement, carPlate] = item.split(', ');
        if (movement === 'IN'){
            parking.push(carPlate);
        }else if (movement === 'OUT'){
            parking = parking.filter(e => e !== carPlate)
        }
    }
    let sortedParking = parking.sort((a, b) => a.localeCompare(b))

    if (sortedParking.length === 0){
        console.log("Parking Lot is Empty");
    }else{
        sortedParking.forEach(element => {
            console.log(element);
        });
    }
}

// function piccolo(arr) {
//     let carParking = new Map();
//     for (const el of arr) {
//       [action, carNumber] = el.split(", ");
//       if (action === "IN") {
//         carParking.set(carNumber, 1);
//       }
//       if (action === "OUT") {
//         carParking.delete(carNumber);
//       }
//     }
  
//     let carParkingSort = Array.from(carParking.entries()).sort(([a], [b]) =>
//       a.localeCompare(b)
//     );
  
//     for (let [car, state] of carParkingSort) {
//       console.log(car);
//     }
//   }

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
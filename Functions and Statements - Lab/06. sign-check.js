// function signCheck(...numbers){
//     let counter = 0;

//     for (let index = 0; index < numbers.length; index++) {
//         const element = numbers[index];
//         if (element < 0){
//             counter++;
//         }
//     }

//     if (counter % 2 === 0){
//         console.log('Positive');
//     }else{
//         console.log('Negative');
//     }
// }


function signCheck(...numbers){
    return numbers
    .filter((num) => num < 0)
    .length % 2 === 0 ? 'Positive' : 'Negative';
}

console.log(signCheck(5, 12, -15));

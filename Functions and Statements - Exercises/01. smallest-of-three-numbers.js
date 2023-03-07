function smallestOfThreeNumbers(...numbers){
    let smallest = Math.min(...numbers);
    return smallest;
}

console.log(smallestOfThreeNumbers(2,5,3));

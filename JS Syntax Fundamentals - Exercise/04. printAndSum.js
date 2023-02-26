function printAndSum(start, end){
    let outcome = [];
    let sum = 0;
    for (let i=start; i<=end; i++){
        outcome.push(i);
        sum += i;
    }

    console.log(outcome.join(' '));
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60)
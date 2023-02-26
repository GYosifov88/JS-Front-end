function listOfNames(list){
    let newList = list.sort((a,b) => a.localeCompare(b));
    for (let i = 1; i <= newList.length; i++){
        console.log(`${i}.${newList[i-1]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])
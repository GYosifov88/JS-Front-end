function loadingBar(number){
    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.',];
    for (let i = 0; i < number /10; i++){
        bar[i] = '%'
    }

    if (number === 100){
        console.log("100% Compleye!");
        console.log("[%%%%%%%%%%]");
    }else{
    console.log(`${number}% [${bar.join('')}]`);
    console.log("Still loading...");
    }
}


loadingBar(30);

loadingBar(50);

loadingBar(100);
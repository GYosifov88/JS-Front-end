function login(array){
    let attempts = 0;
    let username = array[0]

    for (let i = 1; i < array.length; i++) {
        const pass = array[i];
        if (!(pass === username.split("").reverse().join(""))){
            attempts++;
            if (attempts === 4){
                console.log(`User ${username} blocked!`);
            }else{
                console.log("Incorrect password. Try again.");
            }
        }else{
            console.log(`User ${username} logged in.`);
        }
    }    
}

// login(['Acer','login','go','let me in','recA']);
// login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny'])
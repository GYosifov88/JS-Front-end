function passwordValidator(password){
    let pattern = /[a-zA-Z0-9]/;
    let valid = true;

    if (password.length < 6 || password.length > 10){
        valid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    for (let index = 0; index < password.length; index++) {
        const char = password[index];
        if (!pattern.test(char)){
            valid = false;
            console.log("Password must consist only of letters and digits");
            break;
        };
    }
    if (!(/[0-9]{2,}/).test(password)){
        valid = false;
        console.log("Password must have at least 2 digits");
    }

    if (valid === true){
        console.log("Password is valid");
    }
       
}

passwordValidator('MyPass123')
function ages(age){
    let outcome;
    if (age>=0 && age<=2){
        outcome = 'baby';
    }else if (age>=3 && age<=13){
        outcome = 'child';
    }else if (age>=14 && age<=19){
        outcome = 'teenager';
    }else if (age>=20 && age<=65){
        outcome = 'adult';
    }else if (age>=66){
        outcome = 'elder';
    }else{
        outcome = 'out of bounds'
    }

    console.log(outcome);
}

ages(-1)
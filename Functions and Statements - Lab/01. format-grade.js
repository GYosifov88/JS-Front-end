function formatGrage(grade){
    if (grade < 3){
        console.log('Fail (2)');
    }else if (grade >= 3 && grade < 3.50){
        console.log(`Poor (${roundGrade(grade)})`);
    }else if (grade >= 3.50 && grade < 4.50){
        console.log(`Good (${roundGrade(grade)})`);
    }else if (grade >= 4.50 && grade < 5.50){
        console.log(`Very good (${roundGrade(grade)})`);
    }else if (grade >= 5.50){
        console.log(`Excellent (${roundGrade(grade)})`);
    }

    function roundGrade(gr){
        return gr.toFixed(2)
    }
}

formatGrage(2.99)
function sameNumbers(num){
    let sum = 0;
    let digits = Array.from(num.toString()).map(Number);
    function test_same_digit(num) {
        var first = num % 10;
        while (num) {
          if (num % 10 !== first) return false;
      num = Math.floor(num / 10);
        }
        return true
      }           
    console.log(test_same_digit(num));
    for (let i=0; i<digits.length; i++){
        sum += digits[i];
    }
    console.log(sum);
}

sameNumbers(2222222)
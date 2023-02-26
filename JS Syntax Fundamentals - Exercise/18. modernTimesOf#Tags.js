function findHashTag(sentence) {
    let sentenceArr = sentence.split(" ");
    for (const el of sentenceArr) {
      if (el.startsWith("#") && el.length !== 1) {
        let onlyLetters = true;
        for (let i = 1; i < el.length; i++) {
          if (el[i].toLowerCase() === el[i].toUpperCase()) {
            onlyLetters = false;
            break;
          }
        }
        if (onlyLetters === true) {
          console.log(el.substring(1));
        }
      }
    }
  }

findHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
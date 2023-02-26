function findSubstring(word, sentence) {
    let sentenceArr = sentence.split(" ");
    let isFound = false;
  
    for (const element of sentenceArr) {
      if (element.toLowerCase() === word.toLowerCase()) {
        isFound = true;
        break;
      }
    }
    if (isFound) {
      console.log(word);
    } else {
      console.log(`${word} not found!`);
    }
  }
  
  findSubstring("javascript", "JavaScript is the best programming language");
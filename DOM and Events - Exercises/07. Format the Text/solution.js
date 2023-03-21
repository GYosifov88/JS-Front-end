function solve() {
  const newInput = document.getElementById('input');
  const newOutput = document.getElementById('output');
  let sentences = newInput.value.split('.');
  sentences.pop();

  while (sentences.length > 0){
    let paragraphSentences = sentences.splice(0, 3)
      .map((p) => p.trimStart());
      const newParagraph = document.createElement('p');
      newParagraph.textContent = paragraphSentences.join('.') + '.';
      newOutput.appendChild(newParagraph);
  }
}
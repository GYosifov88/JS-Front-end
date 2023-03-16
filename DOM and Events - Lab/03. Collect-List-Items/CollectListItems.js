function extractText() {
    const itemNodes = document.querySelectorAll("ul#items li");
    const textarea = document.querySelector("#result");
  for (let node of itemNodes) {
    textarea.value += node.textContent + "\n";
  }
}
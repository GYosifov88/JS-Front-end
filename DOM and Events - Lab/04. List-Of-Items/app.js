function addItem() {
   const text = document.getElementById("newItemText");
   let textInfo = text.value;
   let li = document.createElement('li');
   li.appendChild(document.createTextNode(textInfo));
   document.getElementById("items").appendChild(li);
   document.getElementById('newItemText').value = '';
}
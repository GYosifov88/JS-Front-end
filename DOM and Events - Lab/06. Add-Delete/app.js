function addItem() {
    const ulContainer = document.getElementById('items');
    const text = document.getElementById("newItemText");
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    newLi.textContent = text.value;
    newAnchor.textContent = '[Delete]';
    newAnchor.href = '#';
    newAnchor.addEventListener('click', deleteHandler);
    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);
    text.value = '';
    
    function deleteHandler(e){
        const liItem = e.currentTarget.parentElement;
        liItem.remove()
    }
 }
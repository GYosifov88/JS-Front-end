function attachEvents(){
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const addBtn = document.getElementById('add-product');
    const updateProductBtn = document.getElementById('update-product');
    const loadAllBtn = document.querySelector('.list #load-product');
    const productInput = document.getElementById('product');
    const countInput = document.getElementById('count');
    const priceInput = document.getElementById('price');
    const groceriesContainer = document.querySelector('.tbl-content > table > tbody');
    let editgroceryId = null;

    loadAllBtn.addEventListener('click', loadAllGroceriesHandler);
    addBtn.addEventListener('click', addGroceryHandler);

    async function loadAllGroceriesHandler(e){
        if(e){
            e.preventDefault();
        }
        const result = await fetch(BASE_URL);
        const groceriesData = await result.json();
            for (const groceryId in groceriesData) {
                const { product, count, price, _id } = groceriesData[groceryId];
                const tableRow = document.createElement('tr');
                const productColumn = document.createElement('td');
                productColumn.className = 'name';
                const countColumn = document.createElement('td');
                countColumn.className = 'count-product';
                const priceColumn = document.createElement('td');
                priceColumn.className = 'product-price';
                const buttonsColumn = document.createElement('td');
                buttonsColumn.className = 'btn'
                const updateBtn = document.createElement('button');
                updateBtn.className = 'update'
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete'
                productColumn.textContent = product;
                countColumn.textContent = count;
                priceColumn.textContent = price;
                updateBtn.textContent = 'Update';
                deleteBtn.textContent = 'Delete';
                
                deleteBtn.id = groceriesData[groceryId]._id;

                tableRow.appendChild(productColumn);
                tableRow.appendChild(countColumn);
                tableRow.appendChild(priceColumn);
                buttonsColumn.appendChild(updateBtn);
                buttonsColumn.appendChild(deleteBtn);
                tableRow.appendChild(buttonsColumn);
                groceriesContainer.appendChild(tableRow);

                deleteBtn.addEventListener('click', removeGroceryHandler);

                updateBtn.addEventListener('click', () => {
                    updateTaskId = groceriesData[groceryId]._id;
                    updateBtn.id = updateTaskId;
                    console.log(updateTaskId);
                    productInput.value = product;
                    countInput.value = count;
                    priceInput.value = price;
                    updateProductBtn.disabled = false;
                    addBtn.disabled = true;                    
                   
                    updateProductBtn.addEventListener('click', () => {
                        updateTaskId = groceriesData[groceryId]._id;
                        const editedProduct = productInput.value;
                        const editedCount = countInput.value;
                        const editedPrice = priceInput.value;
                        const httpHeaders = {
                        method: 'PATCH',
                        body: JSON.stringify({ product: editedProduct, count: editedCount, price: editedPrice}),
                        }
                        fetch(BASE_URL + updateTaskId, httpHeaders)
                        .then((res) => res.json())
                        .then(() => {
                            loadAllGroceriesHandler(e);
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                    })      
                    });
            
            }

    }

    function addGroceryHandler(){
        // if (event) {
        //     event.preventDefault();
        //   }
          try{
            const product = productInput.value;
            const count = countInput.value;
            const price = priceInput.value;
            const httpHeaders = {
              method: 'POST',
              body: JSON.stringify({ product: product, count: count, price: price }),
            }
            fetch(BASE_URL, httpHeaders)
                    .then((res) => res.json())
                    .then(() => {
                        loadAllGroceriesHandler(e);
                        productInput.value = '';
                        countInput.value = '';
                        priceInput.value = '';
                    })
                    .catch((err) => {
                        console.error(err);
                    })
          }catch (error){
            console.error(error);
          }
      }

      async function removeGroceryHandler(){
        const id = this.id;
        const httpHeaders = {
          method: 'DELETE'
        };
        await fetch(BASE_URL + id, httpHeaders);
        loadAllGroceriesHandler();
      }
}

attachEvents()

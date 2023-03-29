function attachEvents() {
    const phoneBookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate')
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    
    loadBtn.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', createPhoneBookHandler)

    async function loadPhoneBookHandler(){
        try {
        const phonebookRes = await fetch(BASE_URL);
        let phonebookData = await phonebookRes.json();
        phonebookData = Object.values(phonebookData);
        phoneBookContainer.innerHTML = '';
        for (const { phone, person, _id } of phonebookData) {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.textContent = 'Delete';
                // attaching id to the button
                button.id = _id;
                button.addEventListener('click', deletePhoneBookHandler)
                li.textContent = `${person}: ${phone}`;  
                li.appendChild(button);          
                phoneBookContainer.appendChild(li);
        }
        } catch (err) {
            console.error(err);
        }
       
    }

    function createPhoneBookHandler(){
        const person = personInput.value;
        const phone = phoneInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }
        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }

    async function deletePhoneBookHandler(){
        // reaching with 'this' because id is assigned to the button
        const id = this.id;
        const httpHeaders = {
            method: 'DELETE',
        };
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(loadPhoneBookHandler)
            .catch((err) => {
                console.error(err);
            })
    }


}

attachEvents();
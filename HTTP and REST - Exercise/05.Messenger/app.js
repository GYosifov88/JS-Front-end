function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const messagesContainer = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const [nameInput, messageInput] = Array.from(document.querySelectorAll('#controls > div > input'));

    sendBtn.addEventListener('click', createMsgHandler);
    refreshBtn.addEventListener('click', showMsgsHandler);

    function createMsgHandler(){
        const name = nameInput.value;
        const message = messageInput.value;
        const httpHeaders = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ author: name, content: message })
        }

        fetch(BASE_URL,  httpHeaders)
            .then((res) => res.json())
            .then(() => {
                nameInput.value = '';
                messageInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }

    async function showMsgsHandler(){
        const messagesRes = await fetch(BASE_URL);
        let messagesData = await messagesRes.json();
        messagesData = Array.from(Object.values(messagesData));
        console.log(messagesData);
        result = '';
        messagesContainer.disabled = false
        for (const { author, content, _id } of messagesData) {
                result += `${author}: ${content}\n`;  
        }
        result = result.trim();
        messagesContainer.textContent = result;
    }

}

attachEvents();
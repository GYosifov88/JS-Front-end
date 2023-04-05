function solve() {

    const inputDOMSelectors = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message'),
    }

    const otherDOMSelectors = {
        addBtn: document.getElementById('add'),
        resetBtn: document.getElementById('reset'),
        mailsContainer: document.getElementById('list'),
        sentMailsContainer: document.getElementsByClassName('sent-list')[0],
        trash: document.getElementsByClassName('delete-list')[0],
    }
    
    otherDOMSelectors.addBtn.addEventListener('click', addMessageHandler);
    otherDOMSelectors.resetBtn.addEventListener('click', resetInputsHandler);

    function addMessageHandler(event){
        if (event) {
            event.preventDefault();
        }
        const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allFieldsHaveValue){
            return;
        }

        const {recipientName, title, message} = inputDOMSelectors;
        const li = createElement('li', otherDOMSelectors.mailsContainer);
        createElement('h4', li, `Title: ${title.value}`);
        createElement('h4', li, `Recipient Name: ${recipientName.value}`);
        createElement('span', li, `${message.value}`);
        const divCont = createElement('div', li, null, null, 'list-action');
        const sendBtn = createElement('button', divCont, 'Send', null, 'send', {'type': 'submit'});
        const deleteBtn = createElement('button', divCont, 'Delete', null, 'delete', {'type': 'submit'});
        
        clearAllInputs();

        sendBtn.addEventListener('click', sendMessageHandler);
        deleteBtn.addEventListener('click', deleteMessageHandler);
    }

    function sendMessageHandler(event){
        let msgToSend = event.target.parentNode.parentNode;
        title = msgToSend.children[0].textContent.split(': ')[1];
        recipient = msgToSend.children[1].textContent.split(': ')[1];

        const li = createElement('li', otherDOMSelectors.sentMailsContainer);
        createElement('span', li, `To: ${recipient}`);
        createElement('span', li, `Title: ${title}`);
        const buttonDivContainer = createElement('div', li, null, ['btn']);
        const deleteSentBtn = createElement('button', buttonDivContainer, 'Delete', ['delete'], null, {'type': 'submit'})
        msgToSend.remove();

        deleteSentBtn.addEventListener('click', deleteSentMessageHandler);
        
    }

    function deleteMessageHandler(event) {
        let msgToSend = event.target.parentNode.parentNode;
        title = msgToSend.children[0].textContent.split(': ')[1];
        recipient = msgToSend.children[1].textContent.split(': ')[1];
        const li = createElement('li', otherDOMSelectors.trash);
        createElement('span', li, `To: ${recipient}`);
        createElement('span', li, `Title: ${title}`);
        msgToSend.remove()
    }

    function deleteSentMessageHandler(event){
        let msgToSend = event.target.parentNode.parentNode;
        title = msgToSend.children[0].textContent.split(': ')[1];
        recipient = msgToSend.children[1].textContent.split(': ')[1];
        const li = createElement('li', otherDOMSelectors.trash);
        createElement('span', li, `To: ${recipient}`);
        createElement('span', li, `Title: ${title}`);
        msgToSend.remove()
    }

    function resetInputsHandler(event){
        if (event) {
            event.preventDefault();
        }

        clearAllInputs();
    }

    function clearAllInputs(){
        Object.values(inputDOMSelectors)
            .forEach((input)=> {
            input.value = '';
            })
    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHTML){
            const htmlElement = document.createElement(type);
        
            if (content && useInnerHTML){
            htmlElement.innerHTML = content;
            } else {
            if (content && type !== 'input'){
                htmlElement.textContent = content;
            } 
            if (content && type === 'input'){
                htmlElement.value = content;
            }
            }
        
            if (classes && classes.length > 0){
            htmlElement.classList.add(...classes);
            }
            
            if (id){
            htmlElement.id = id;
            }
        
            if (attributes){
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
            }
        
            if (parentNode){
            parentNode.appendChild(htmlElement);
            }
        
            return htmlElement;
    }
}
solve()
window.addEventListener('load', solve);

function solve() {

    const processState = {
        productType: null,
        description: null,
        clientName: null,
        clientPhone: null,
      };


    const inputDOMSelectors = {
        productType: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    }


    const otherDOMSelectors = {
        sendBtn: document.querySelector('#right form button'),
        receivedOrdersContainer: document.getElementById('received-orders'),
        completedOrdersContainer: document.getElementById('completed-orders'),
        clearBtn: document.querySelector('#completed-orders button'),
      };
      
    
    otherDOMSelectors.sendBtn.addEventListener('click', submitFormHandler);
    otherDOMSelectors.clearBtn.addEventListener('click', clearFinishedProcessesHandler);
    
    
    function submitFormHandler(event){
        if (event) {
            event.preventDefault();
        }

      const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

      if (!allFieldsHaveValue){
        return;
      }

      const {productType, description, clientName, clientPhone} = inputDOMSelectors;

      const div = createElement('div', otherDOMSelectors.receivedOrdersContainer, null, ['container']);
      createElement('h2', div, `Product type for repair: ${productType.value}`);
      createElement('h3', div, `Client information: ${clientName.value}, ${clientPhone.value}`);
      createElement('h4', div, `Description of the problem: ${description.value}`);
      const startBtn = createElement('button', div, "Start repair", ['start-btn']);
      const finishBtn = createElement('button', div, 'Finish repair', ['finish-btn'], null, {'disabled': true})

      for (const key in inputDOMSelectors) {
        processState[key] = inputDOMSelectors[key].value;
      }

      clearAllInputs();

      startBtn.addEventListener('click', startProcessHandler);
      finishBtn.addEventListener('click', finisProcessHandler);  
    }

    function startProcessHandler(event){
        const startBtn = Array.from(event.currentTarget.parentNode.children)[3];
        const finishBtn = Array.from(event.currentTarget.parentNode.children)[4];
        startBtn.setAttribute('disabled', true);
        finishBtn.removeAttribute('disabled');
    }

    function finisProcessHandler(){
        const {productType, description, clientName, clientPhone} = processState;
        const div = createElement('div', otherDOMSelectors.completedOrdersContainer, null, ['container']);
        createElement('h2', div, `Product type for repair: ${productType}`);
        createElement('h3', div, `Client information: ${clientName}, ${clientPhone}`);
        createElement('h4', div, `Description of the problem: ${description}`);

        otherDOMSelectors.receivedOrdersContainer.innerHTML = '';
        createElement('h2', otherDOMSelectors.receivedOrdersContainer, 'Received orders:');
        createElement('img', otherDOMSelectors.receivedOrdersContainer, null, null, null,{'src': './style/img/slider_2.jpg'})
    }

    function clearFinishedProcessesHandler(){
        otherDOMSelectors.completedOrdersContainer.innerHTML = '';
        createElement('h2', otherDOMSelectors.completedOrdersContainer, 'Completed orders:');
        createElement('img', otherDOMSelectors.completedOrdersContainer, null, null, null,{'src': './style/img/completed-order.png'});
        createElement('button', otherDOMSelectors.completedOrdersContainer, 'Clear', ['clear-btn']);
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
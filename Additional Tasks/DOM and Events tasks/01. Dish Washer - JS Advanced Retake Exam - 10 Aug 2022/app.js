window.addEventListener("load", solve);

function solve() {

  const taskState = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    task: null,
  };
  
  const inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    gender: document.getElementById('genderSelect'),
    task: document.getElementById('task')
  };

  const otherDOMSelectors = {
    submitBtn: document.getElementById('form-btn'),
    inProgressContainer: document.getElementById('in-progress'),
    progressCounter: document.getElementById('progress-count'),
    finishedTasksContainer: document.getElementById('finished'),
    clearBtn: document.getElementById('clear-btn')
  }

  let counter = 0;

  otherDOMSelectors.submitBtn.addEventListener('click', submitTaskHandler);
  otherDOMSelectors.clearBtn.addEventListener('click', clearTaskHandler);

  function submitTaskHandler(event){
    if (event){
      event.preventDefault();
    }

    const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
    if (!allFieldsHaveValue){
      return;
    }

    const {firstName, lastName, age, gender, task} = inputDOMSelectors;
    counter++;
    otherDOMSelectors.progressCounter.textContent = counter;
    const li = createElement('li', otherDOMSelectors.inProgressContainer, null, ['each-line']);
    const article = createElement('article', li);
    createElement('h4', article, `${firstName.value} ${lastName.value}`);
    createElement('p', article, `${gender.value}, ${age.value}`);
    createElement('p', article, `Dish description: ${task.value}`);
    const editBtn = createElement('button', li, 'Edit', ['edit-btn']);
    const completeBtn = createElement('button', li, 'Mark as complete', ['complete-btn']);
    
    for (const key in inputDOMSelectors) {
      taskState[key] = inputDOMSelectors[key].value;
    }

    clearAllInputs();

    editBtn.addEventListener('click', editTaskHandler);
    completeBtn.addEventListener('click', completeTaskHandler);
  }

  function editTaskHandler(){
    let taskToEdit = this.parentNode;
    
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = taskState[key]
    }
      
    taskToEdit.remove();
    counter--;
    otherDOMSelectors.progressCounter.textContent = counter;
  }

  function completeTaskHandler(){
    let taskToComplete = this.parentNode;
    counter--;
    const editBtn = taskToComplete.querySelector('.edit-btn');
    const completeBtn = taskToComplete.querySelector('.complete-btn');
    otherDOMSelectors.finishedTasksContainer.appendChild(taskToComplete);

    editBtn.remove();
    completeBtn.remove();
    otherDOMSelectors.progressCounter.textContent = counter;
  }

  function clearTaskHandler(){
    let taskToClear = this.parentNode;
    let liToClear = taskToClear.children[1];
    liToClear.innerHTML = '';
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

window.addEventListener("load", solve);

function solve() {

  const postsState = {
    title: null,
    category: null,
    content:null,
  };

  const inputDOMSelectors = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content'),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById('publish-btn'),
    reviewContainer: document.getElementById('review-list'),
    publishedContainer: document.getElementById('published-list'),
    clearBtn: document.getElementById('clear-btn')
  };

  otherDOMSelectors.publishBtn.addEventListener('click', publishPostHandler);
  otherDOMSelectors.clearBtn.addEventListener('click', clearPostsHandler);

  function publishPostHandler(event) {
    if (event) {
      event.preventDefault();
    }

    const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
    if (!allFieldsHaveValue){
      return;
    }

    const {title, category, content} = inputDOMSelectors;

    const li = createElement('li', otherDOMSelectors.reviewContainer, null, ['rpost']);
    const article = createElement('article', li);
    createElement('h4', article, `${title.value}`);
    createElement('p', article, `Category: ${category.value}`);
    createElement('p', article, `Content: ${content.value}`);
    const editBtn = createElement('button', li, 'Edit', ['action-btn', 'edit']);
    const approveBtn = createElement('button', li, 'Approve', ['action-btn', 'approve']);

    for (const key in inputDOMSelectors) {
      postsState[key] = inputDOMSelectors[key].value;
    }

    clearAllInputs()

    editBtn.addEventListener('click', editPostHandler);
    approveBtn.addEventListener('click', approvePostHandler);
  }

  function editPostHandler(){
    const postToEdit = this.parentNode;
    
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = postsState[key]
    }

    postToEdit.remove();

  }

  function approvePostHandler(){
    const postToApprove = this.parentNode;
    const editBtn = postToApprove.querySelector('.edit');
    const approveBtn = postToApprove.querySelector('.approve');
    otherDOMSelectors.publishedContainer.appendChild(postToApprove);

    editBtn.remove();
    approveBtn.remove();
    
  }

  function clearPostsHandler(){
    const postToClear = this.parentNode;
    const list = postToClear.querySelector('#published-list');
    list.innerHTML = '';
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

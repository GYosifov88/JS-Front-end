window.addEventListener("load", solve);

function solve() {
  const newFirstName = document.getElementById('first-name');
  const newLastName = document.getElementById('last-name');
  const newAge = document.getElementById('age');
  const newStory = document.getElementById('story-title');
  const newGenre = document.getElementById('genre').value;
  const publishBtn = document.getElementById('form-btn');

  publishBtn.addEventListener('click', publishHandler);

  function publishHandler(){
    if (newFirstName && newLastName && newAge && newStory && newGenre){
      const newLi = createElement('li', '', 'preview-list', '', ['story-info'])
      const newArticle = createElement('article')
    }

  }





  function createElement(type, content, parentNode, id, classes, attributes){
    const htmlElement = document.createElement(type);

    if (content && type !== 'input'){
      htmlElement.textContent = content;
    }

    if (content && type === 'input'){
      htmlElement.value = content;
    }

    if (id){
      htmlElement.id = id;
    }


    if (classes){
      htmlElement.classList.add(...classes);
    }

    if (parentNode){
      parentNode.appendChild(htmlElement);
    }

    if (attributes){
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}


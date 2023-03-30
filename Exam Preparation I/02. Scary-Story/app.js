window.addEventListener("load", solve);

function solve() {
  const newFirstName = document.getElementById('first-name');
  const newLastName = document.getElementById('last-name');
  const newAge = document.getElementById('age');
  const newStoryTitle = document.getElementById('story-title');
  const newGenre = document.getElementById('genre');
  const newstoryText = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  const previewContainer = document.getElementById('preview-list');
  const mainDivBody = document.getElementById('main');

  publishBtn.addEventListener('click', publishHandler);

  function publishHandler(){
    const firstName = newFirstName.value;
    const lastName = newLastName.value;
    const age = newAge.value;
    const storyTitle = newStoryTitle.value;
    const genre = newGenre.value;
    const storyText = newstoryText.value;

    if (firstName !== '' && lastName !== '' && age !== '' && storyTitle !== '' && genre !== '' && storyText !== ''){
      const li = document.createElement('li');
      li.className = 'story-info';
      previewContainer.appendChild(li);
      const article = document.createElement('article');
      li.appendChild(article);
      const headerName = document.createElement('h4');
      headerName.textContent = `Name: ${firstName} ${lastName}`;
      article.appendChild(headerName);
      const ageParagraph = document.createElement('p');
      ageParagraph.textContent = `Age: ${age}`;
      article.appendChild(ageParagraph);
      const titleParagraph = document.createElement('p');
      titleParagraph.textContent = `Title: ${storyTitle}`;
      article.appendChild(titleParagraph);      
      const genreParagraph = document.createElement('p');
      genreParagraph.textContent = `Genre: ${genre}`;
      article.appendChild(genreParagraph);
      const textParagraph = document.createElement('p');
      textParagraph.textContent = `${storyText}`;
      article.appendChild(textParagraph);
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save Story';
      saveBtn.className = 'save-btn';
      li.appendChild(saveBtn);
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit Story';
      editBtn.className = 'edit-btn';
      li.appendChild(editBtn);
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete Story';
      deleteBtn.className = 'delete-btn';
      li.appendChild(deleteBtn);

      newFirstName.value = '';
      newLastName.value = '';
      newAge.value = '';
      newStoryTitle.value = '';
      newGenre.value = '';
      newstoryText.value = '';
      publishBtn.disabled = true;

      editBtn.addEventListener('click', editStoryHandler);

      function editStoryHandler(){
        newFirstName.value = firstName;
        newLastName.value = lastName;
        newAge.value = age;
        newStoryTitle.value = storyTitle;
        newGenre.value = genre;
        newstoryText.value = storyText;
        publishBtn.disabled = false;
        previewContainer.removeChild(li);  
      }

      saveBtn.addEventListener('click', saveStoryHandler);

      function saveStoryHandler(){
        mainDivBody.innerHTML = '';
        const finalHeader = document.createElement('h1');
        finalHeader.textContent = 'Your scary story is saved!';
        mainDivBody.appendChild(finalHeader);
      }


      deleteBtn.addEventListener('click', deleteStoryHandler);

      function deleteStoryHandler(){
        previewContainer.removeChild(li);
        publishBtn.disabled = false;
      }

    }

  }

}


  // function createElement(type, content, parentNode, id, classes, attributes){
  //   const htmlElement = document.createElement(type);

  //   if (content && type !== 'input'){
  //     htmlElement.textContent = content;
  //   }

  //   if (content && type === 'input'){
  //     htmlElement.value = content;
  //   }

  //   if (id){
  //     htmlElement.id = id;
  //   }


  //   if (classes){
  //     htmlElement.classList.add(...classes);
  //   }

  //   if (parentNode){
  //     parentNode.appendChild(htmlElement);
  //   }

  //   if (attributes){
  //     for (const key in attributes) {
  //       htmlElement.setAttribute(key, attributes[key]);
  //     }
  //   }

  //   return htmlElement;
  // }



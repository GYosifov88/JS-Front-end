function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
  const loadBtn = document.getElementById('load-button');
  const addBtn = document.getElementById('add-button');
  const titleInput = document.getElementById('title');
  const tasksContainer = document.getElementById('todo-list');
  let editTaskId = null;

  loadBtn.addEventListener('click', loadAllTasksHandler);
  addBtn.addEventListener('click', addTaskHandler);

  async function loadAllTasksHandler(event){
    if (event) {
        event.preventDefault();
      }
      try {
        tasksContainer.innerHTML = '';
        const tasksRes = await fetch(BASE_URL);
        const tasksData = await tasksRes.json();
        for (const taskId in tasksData) {
            const { name, _id } = tasksData[taskId];
            const li = document.createElement('li');
            const span = document.createElement('span');
            const removeBtn = document.createElement('button');
            const editBtn = document.createElement('button');
            span.textContent = name;
            removeBtn.textContent = 'Remove';
            editBtn.textContent = 'Edit';
        
            li.appendChild(span);
            li.appendChild(removeBtn);
            li.appendChild(editBtn);
            tasksContainer.appendChild(li);

            removeBtn.id = tasksData[taskId]._id;
        
            editBtn.addEventListener('click', () => {
            editTaskId = tasksData[taskId]._id;
            editBtn.id = editTaskId
            const newInput = document.createElement('input');
            newInput.value = name;
            li.replaceChild(newInput, span);
            const submitBtn = document.createElement('button')
            submitBtn.textContent = 'Submit';
            li.replaceChild(submitBtn, editBtn);  
            submitBtn.addEventListener('click', () => {
                editTaskId = tasksData[taskId]._id;
                const editedTitle = newInput.value;
                const httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({ name: editedTitle }),
                }
                fetch(BASE_URL + editTaskId, httpHeaders)
                .then((res) => res.json())
                .then(() => {
                    loadAllTasksHandler();
                    span.textContent = editedTitle;
                    li.replaceChild(span, newInput);
                    li.replaceChild(editBtn, submitBtn);
                })
                .catch((err) => {
                    console.error(err);
                })
            })      
            });

        removeBtn.addEventListener('click', removeTaskHandler);

        }
      } catch (error) {
        console.error(error);
      }
    
  }

  function addTaskHandler(event){
    if (event) {
        event.preventDefault();
      }
      try{
        const title = titleInput.value;
        const httpHeaders = {
          method: 'POST',
          body: JSON.stringify({ name: title }),
        }
        fetch(BASE_URL, httpHeaders)
                .then((res) => res.json())
                .then(() => {
                    loadAllTasksHandler();
                    titleInput.value = "";
                })
                .catch((err) => {
                    console.error(err);
                })
      }catch (error){
        console.error(error);
      }
  }

  async function removeTaskHandler(){
    const id = this.id;
    const httpHeaders = {
      method: 'DELETE'
    };
    await fetch(BASE_URL + id, httpHeaders);
    loadAllTasksHandler();
  }

}

attachEvents();

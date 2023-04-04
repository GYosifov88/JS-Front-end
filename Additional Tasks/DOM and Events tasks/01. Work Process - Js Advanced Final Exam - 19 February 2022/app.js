function solve() {

    const workersState = {
        firstName: null,
        lastName: null,
        email: null,
        birth: null,
        position: null,
        salary: null,
    }

    let totalSalaries = 0;

    const inputDOMSelectors = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        birth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    }

    const otherDOMSelectors = {
        addBtn: document.getElementById('add-worker'),
        workersContainer: document.getElementById('tbody'),
        totalSalary: document.getElementById('sum')
    };
        
    otherDOMSelectors.addBtn.addEventListener('click', hireWorkerHandler);
        

    function hireWorkerHandler(event){
        if (event) {
            event.preventDefault();
        }

        const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allFieldsHaveValue){
            return;
        }

        const {firstName, lastName, email, birth, position, salary} = inputDOMSelectors;
        totalSalaries += Number(salary.value);
        otherDOMSelectors.totalSalary.textContent = totalSalaries.toFixed(2);
        const tr = createElement('tr', otherDOMSelectors.workersContainer);
        createElement('td', tr, `${firstName.value}`);
        createElement('td', tr, `${lastName.value}`);
        createElement('td', tr, `${email.value}`);
        createElement('td', tr, `${birth.value}`);
        createElement('td', tr, `${position.value}`);
        createElement('td', tr, `${salary.value}`);
        const buttonsTd = createElement('td', tr)
        const fireBtn = createElement('button', buttonsTd, 'Fired', ['fired']);
        const editBtn = createElement('button', buttonsTd, 'Edit', ['edit']);
            
        for (const key in inputDOMSelectors) {
            workersState[key] = inputDOMSelectors[key].value;
        }
        
        clearAllInputs();

        editBtn.addEventListener('click', editWorkerHandler);
        fireBtn.addEventListener('click', fireWorkerHandler);
    }

    function editWorkerHandler(event){       
        let workerToRemove = event.target.parentNode.parentNode;
        workersState.firstName = workerToRemove.children[0].textContent;
        workersState.lastName = workerToRemove.children[1].textContent;
        workersState.email = workerToRemove.children[2].textContent;
        workersState.birth = workerToRemove.children[3].textContent;
        workersState.position = workerToRemove.children[4].textContent;
        workersState.salary = workerToRemove.children[5].textContent;
                    
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = workersState[key]
        }
            
        workerToRemove.remove();
        totalSalaries -= Number(workerToRemove.children[5].textContent);
        otherDOMSelectors.totalSalary.textContent = totalSalaries.toFixed(2);
    }

    function fireWorkerHandler(event){
            let workerToRemove = event.target.parentNode.parentNode;
            workerToRemove.remove();
            totalSalaries -= Number(workerToRemove.children[5].textContent);
            otherDOMSelectors.totalSalary.textContent = totalSalaries.toFixed(2);
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
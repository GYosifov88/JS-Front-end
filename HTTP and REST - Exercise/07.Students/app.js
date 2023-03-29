function attachEvents() {
  const submitBtn = document.getElementById('submit');
  const studentContainer = document.querySelector('#results > tbody');
  const [firstNameInput, lastNameInput, facultyNumberInput, gradeInput] = Array.from(document.querySelectorAll('.inputs > input'));
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';

  submitBtn.addEventListener('click', addStudentHandler);
  window.addEventListener('load', loadAllStudentsHandler);

  async function loadAllStudentsHandler(){
    studentContainer.innerHTML = '';
    const studentRes = await fetch(BASE_URL);
    const studentData = await studentRes.json();
    for (const studentId in studentData) {
      const { firstName, lastName, facultyNumber, grade } = studentData[studentId];
      const tableRow = document.createElement('tr');
      const firstNameColumn = document.createElement('td');
      const lastNameColumn = document.createElement('td');
      const facultyNumberColumn = document.createElement('td');
      const gradeColumn = document.createElement('td');
      firstNameColumn.textContent = firstName;
      lastNameColumn.textContent = lastName;
      facultyNumberColumn.textContent = facultyNumber;
      gradeColumn.textContent = grade.toFixed(2);

      tableRow.appendChild(firstNameColumn);
      tableRow.appendChild(lastNameColumn);
      tableRow.appendChild(facultyNumberColumn);
      tableRow.appendChild(gradeColumn);
      studentContainer.appendChild(tableRow);

    }

  }

  async function addStudentHandler(){
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumberInput.value;
    const grade = gradeInput.value;

    const httpHeaders = {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ firstName: firstName, lastName: lastName, facultyNumber: facultyNumber, grade: grade })
    }

    fetch(BASE_URL, httpHeaders)
    .then((res) => res.json())
    .then(() => {
      loadAllStudentsHandler()
      console.log(firstName);
      console.log(lastName);
      console.log(facultyNumber);
      console.log(grade);
      firstNameInput.value = '';
      lastNameInput.value = '';
      facultyNumberInput.value = '';
      gradeInput.value = '';
    })
    .catch((err) => {
        console.error(err);
    })

    
  }

}

attachEvents()
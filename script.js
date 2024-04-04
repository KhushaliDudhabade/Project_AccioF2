const employeeForm = document.getElementById('employeeForm');
const employeeList = document.getElementById('employeeList');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const para=document.getElementById('para')
let employees = [];


employeeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();

  if (!name || !profession || !age) {
    console.log("error happened")
    errorMessage.innerText = "Error: Please make sure All the fields are filled before adding in an employee !!";
    errorMessage.style=`background-color: #fcbfd2;
    color: red;
    width: 550px;
    margin-left:40px;

    `
    successMessage.innerText = "";
    return;
  }

  function validateForm() {
    var x = document.employeeForm["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  const newEmployee = {
    id: generateId(),
    name,
    profession,
    age: parseInt(age)
  };

  employees.push(newEmployee);
  renderEmployees();
  successMessage.innerText = "You have added a employee successfully!";
  errorMessage.innerText = "";
  para.style.display="none";
  employeeForm.reset();
});

function generateId() {
  return employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
}

function renderEmployees() {
  employeeList.innerHTML = "";
  employees.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.classList.add('employee-item');
    employeeDiv.innerHTML = `
      <p>${employee.id}.</p>
      <p>Name: ${employee.name}</p>
      <p>Profession: ${employee.profession}</p>
      <p>Age: ${employee.age}</p>
      <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
    successMessage.innerText = "";
    errorMessage.innerText = "";
  employees = employees.filter(employee => employee.id !== id);
  renderEmployees();
  
}
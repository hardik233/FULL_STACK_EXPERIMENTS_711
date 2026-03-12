let expenses = [];
let editIndex = -1;

function addExpense() {
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let category = document.getElementById("category").value;

  if(name === "" || amount === "") {
    alert("Please enter expense name and amount");
    return;
  }

  let expense = {
    name: name,
    amount: amount,
    category: category
  };

  expenses.push(expense);

  displayExpenses();
  calculateTotal();
  clearInputs();
}

function displayExpenses() {
  let table = document.getElementById("table");

  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Amount</th>
      <th>Category</th>
      <th>Action</th>
    </tr>
  `;

  for(let i = 0; i < expenses.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${expenses[i].name}</td>
        <td>${expenses[i].amount}</td>
        <td>${expenses[i].category}</td>
        <td>
          <button onclick="editExpense(${i})">Edit</button>
          <button onclick="deleteExpense(${i})">Delete</button>
        </td>
      </tr>
    `;
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
  calculateTotal();
}

function editExpense(index) {
  let expense = expenses[index];
  document.getElementById("name").value = expense.name;
  document.getElementById("amount").value = expense.amount;
  document.getElementById("category").value = expense.category;
  editIndex = index;
}

function updateExpense() {
  if(editIndex === -1) {
    alert("Select an expense to update");
    return;
  }

  expenses[editIndex].name = document.getElementById("name").value;
  expenses[editIndex].amount = document.getElementById("amount").value;
  expenses[editIndex].category = document.getElementById("category").value;

  editIndex = -1;

  displayExpenses();
  calculateTotal();
  clearInputs();
}

function calculateTotal() {
  let total = 0;
  for(let i = 0; i < expenses.length; i++) {
    total += Number(expenses[i].amount);
  }
  document.getElementById("total").innerText = total;
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "Food";
}
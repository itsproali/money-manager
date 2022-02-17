// All needed variables
const incomeField = document.getElementById('income-field');
const foodField = document.getElementById('food-field');
const rentField = document.getElementById('rent-field');
const clothesField = document.getElementById('clothes-field');
const calculateButton = document.getElementById('calculate');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const savingField = document.getElementById('saving-field');
const saveButton = document.getElementById('save');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');

// Total Expenses
calculateButton.addEventListener('click', function () {
    getTotalExpenses();
    getBalance();
});

// Get Expenses
function getTotalExpenses() {
    const foodAmount = parseInt(foodField.value);
    const rentAmount = parseInt(rentField.value);
    const clothesAmount = parseInt(clothesField.value);
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
}

// Get Balance
function getBalance() {
    const incomeAmount = parseInt(incomeField.value);
    const expensesAmount = parseInt(totalExpenses.innerText);
    balance.innerText = incomeAmount - expensesAmount;
}

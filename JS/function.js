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
    getError('calculate');
});

// Get Expenses
function getTotalExpenses() {
    const foodAmount = parseInt(foodField.value);
    const rentAmount = parseInt(rentField.value);
    const clothesAmount = parseInt(clothesField.value);
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
    document.getElementById('balance-error').style.display = 'none';
    document.getElementById('nan-error').style.display = 'none';
};

// Get Balance
function getBalance() {
    const incomeAmount = parseInt(incomeField.value);
    const expensesAmount = parseInt(totalExpenses.innerText);
    balance.innerText = incomeAmount - expensesAmount;
};

// Saving Amount & Remaining Balance
saveButton.addEventListener('click', function () {
    const savingAmountNumber = parseInt(incomeField.value) / 100 * parseInt(savingField.value);
    savingAmount.innerText = savingAmountNumber.toFixed();
    remainingBalance.innerText = parseInt(balance.innerText) - parseInt(savingAmount.innerText);
    document.getElementById('saving-error').style.display = 'none';
    document.getElementById('saving-error-2').style.display = 'none';
    getError('saving');
});

// Error Handling
function getError(useField) {
    const incomeFieldAmount = parseInt(incomeField.value);
    const foodFieldAmount = parseInt(foodField.value);
    const rentFieldAmount = parseInt(rentField.value);
    const clothesFieldAmount = parseInt(clothesField.value);
    const savingFieldAmount = parseInt(savingField.value);
    if (useField == 'calculate' && (incomeField.value == '' || foodField.value == '' || rentField.value == '' || clothesField.value == '')) {
        alert("You can't enter any empty field!! Please fill out all the input field")
    }
    else if (incomeFieldAmount < 0 || foodFieldAmount < 0 || rentFieldAmount < 0 || clothesFieldAmount < 0 || savingFieldAmount < 0) {
        alert('Please enter a valid Number')
    }
    else if (isNaN(totalExpenses.innerText) || isNaN(balance.innerText)) {
        document.getElementById('nan-error').style.display = 'block';
    }
    else if (isNaN(savingAmount.innerText)) {
        document.getElementById('saving-error-2').style.display = 'block'
        }
    else if (incomeFieldAmount < totalExpenses.innerText) {
        document.getElementById('balance-error').style.display = 'block';
    }
    else if ((useField == 'saving') && Number(balance.innerText) < Number(savingAmount.innerText)) {
        document.getElementById('saving-error').style.display = 'block';
    }
};
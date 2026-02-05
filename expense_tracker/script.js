const form = document.getElementById('transactionForm');
const list = document.getElementById('list');
const balance = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');

let transactions = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const text = document.getElementById('text').value;
    const amount = +document.getElementById('amount').value;

    if (text.trim() === '' || isNaN(amount)) {
        alert('Please enter valid details');
        return;
    }

    const transaction = {
        id: Date.now(),
        text,
        amount
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();

    form.reset();
});

function addTransactionDOM(transaction) {
    const li = document.createElement('li');
    li.classList.add(transaction.amount > 0 ? 'income' : 'expense');

    li.innerHTML = `
        ${transaction.text}
        <span>${transaction.amount > 0 ? '+' : ''}₹${Math.abs(transaction.amount)}</span>
    `;

    list.appendChild(li);
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);

    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => acc + item, 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0) * -1).toFixed(2);

    balance.textContent = `₹${total}`;
    incomeEl.textContent = `₹${income}`;
    expenseEl.textContent = `₹${expense}`;
}

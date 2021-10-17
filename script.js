// *************************************** SHOW TRANSACTION ITEMS **************************************************

const balance = document.getElementById('balance');           
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = 
[                                                     // Array of objects 
  { id: 1, text: 'Converse', amount: -38 },           // - = Expense, + = Income
  { id: 2, text: 'Mouse', amount: -11 },
  { id: 3, text: 'Gallon of water', amount: -1.50 },
  { id: 4, text: 'Meet Fresh', amount: -8.39 }
];

let transactions = dummyTransactions;

// Add transactions to the DOM- display in History 
function addTransactionDOM(transaction) 
{
  // Get sign - distinguish income from expense
  const sign = transaction.amount < 0 ? '-' : '+';    // Ternary operator where ? = then and : = else

  const item = document.createElement('li');          // Structure/ create a list item
  
  // Add class based on value - class 'minus' or class 'plus' (LINE 29 index.html)
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');    

  // Set innerHTML to a template string - use backticks to set var, expressions 
  item.innerHTML = 
  `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete">x</button>
  `;

  // Add it to the DOM
  list.appendChild(item);                            // Function
}

// ********************************* Update the balance, income, and expense **************************************
function updateValues() 
{
  const amounts = transactions.map(transactions => transactions.amount);      // Map() create an array of the amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);   // Total up the amounts/ accumulate that current item ; acc = accumulator 

  const income = amounts
                        .filter(item => item > 0)                       // Takes in a funct ; item > 0 is an income
                        .reduce((acc, item) => (acc += item), 0)        // Add up the income
                        .toFixed(2);

  const expense = amounts
                        .filter(item => item < 0)                       // Item < 0 is an expense
                        .reduce((acc, item) => (acc += item), 0) * -1
                        .toFixed(2);

  // Insert into the DOM
  balance.innerText = `$${total}`;      // Set to a template string ; blue = syntax
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`; 
}

// Init app - run right away
function init() 
{
  list.innerHTML = '';                               // Clear out the list

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

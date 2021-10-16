const balance = document.getElementById('balance');           
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [                           // Array of objects 
  { id: 1, text: 'Converse', amount: -38 },
  { id: 2, text: 'Mouse', amount: -11 },
  { id: 3, text: 'Gallon of water', amount: -1.50 },
  { id: 4, text: 'Meet Fresh', amount: -8.39 }
];

let transactions = dummyTransactions;

// Add transactions to the DOM- display in History 
function addTransactionDOM(transaction) {
  // Get sign - distinguish income from expense
  const sign = transcation.amount < 0 ? '-' : '+';    // Ternary operator where ? = then and : = else

  const item = document.createElement('li');          // Create a list item
  
  // Add class based on value
  item.classList.add(transaction.amount < 0 ? '-' : '+');

  // Set innerHTML to a template string - use back ticks to set var, expressions 
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete">x</button>
  `;

  // Add it to the DOM
  list.appendChild(item);                            // Function
}

// Init app - run right away
function init() {
  list.innerHTML = '';                               // Clear out the list

  transactions.forEach(addTransactionDOM);
}

init();

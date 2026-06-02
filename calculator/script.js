let currentOperand = '0';
let previousOperand = '';
let operation = null;
let resetScreen = false;

const currentEl = document.getElementById('current');
const previousEl = document.getElementById('previous');

function updateDisplay() {
  currentEl.textContent = currentOperand;

  if (operation) {
    previousEl.textContent = `${previousOperand} ${operation}`;
  } else {
    previousEl.textContent = '';
  }
}

function appendNumber(number) {
  if (resetScreen) {
    currentOperand = '';
    resetScreen = false;
  }

  if (number === '.' && currentOperand.includes('.')) return;

  if (currentOperand === '0' && number !== '.') {
    currentOperand = '';
  }

  currentOperand += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentOperand === '') return;

  if (previousOperand !== '') {
    calculate();
  }

  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function calculate() {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  let result;

  switch (operation) {
    case '+':
      result = prev + current;
      break;

    case '-':
      result = prev - current;
      break;

    case '*':
      result = prev * current;
      break;

    case '/':
      if (current === 0) {
        currentOperand = 'Error';
        updateDisplay();
        return;
      }
      result = prev / current;
      break;

    case '%':
      result = prev % current;
      break;

    default:
      return;
  }

  currentOperand = result.toString();
  previousOperand = '';
  operation = null;
  resetScreen = true;

  updateDisplay();
}

function clearAll() {
  currentOperand = '0';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function deleteLast() {
  if (currentOperand.length === 1) {
    currentOperand = '0';
  } else {
    currentOperand = currentOperand.slice(0, -1);
  }

  updateDisplay();
}

document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
    appendNumber(e.key);
  }

  if (['+', '-', '*', '/', '%'].includes(e.key)) {
    appendOperator(e.key);
  }

  if (e.key === 'Enter' || e.key === '=') {
    calculate();
  }

  if (e.key === 'Backspace') {
    deleteLast();
  }

  if (e.key === 'Escape') {
    clearAll();
  }
});

updateDisplay();

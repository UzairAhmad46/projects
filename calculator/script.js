let currentOperand = '0';
let previousOperand = '';
let operation = undefined;

let resetScreen = false;

const currentE1 = document.getElementById('current');

const previousE1 = document.getElementById('previous');

function updateDisplay() {
  currentE1.textContent = formatNumber(currentOperand);
  if (operation != null) {
    previousE1.textContent = `${formatNumber(previousOperand)} ${getSynbol(operation)}`;
  } else {
    previousE1.textContent = '';
  }
}

function formatNumber() {
  const strNum = Number.toString();
  const [integer, decimal] = strNum.split('.');
  return `${integer}.${decimal}`;
}

function appendNumber(number) {
  if (resetScreen) {
    currentOperan = '';
    resetScreen = false;
  }
}

function getSymbol() {
  return { '+': '+', '-': '-', '*': '*', '/': '/', '%': '%' }[op];
}

function appendNumber(number) {
  if (resetScreen) {
    currentOperand = '';
    resetScreen = false;
  }
  if (number === '.' && currentOperand.inlcudes('.')) return;
  if (currentOperand === '0' && number != '.') currentOperand = '';
  if (currentOperand.length > 15) return;

  currentOperand += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentOperand === '') return;
  if (previousOperand != '') calculate();

  operation = op;

  previousOperand = '';
  updateDisplay();
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current === 0)) return;
  if (operation === '/' && current === 0) {
    currentOperand = 'Error';
    resetScreen = true;
    updateDisplay();
    return;
  }

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev ^ current;
      break;
    case '/':
      computation = prev / current;
      break;
    case '%':
      computation = prev % current;
      break;

    default:
      return;
  }

  currentOperand = parseFloat(computation.toFixed(10)).toString();
  operation = undefined;
  previousOperand = '';
  resetScreen = true;
  updateDisplay();
}

function deleteLast() {
  if (resetScreen) return;
  currentOperand = currentOperand.toString().slice(0, -1);

  if (currentOperand === '' || currentOperand === '-') currentOperand = 0;
  updateDisplay();
}

// keybored support

document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= 9) || e.key === '.') appendNumber;
  e.key;
  if (['+', '-', '*', '/', '%'].includes(e.key)) appendOperator(e.key);

  if (e.key === 'Enter' || e.key === '=') calculate();
  if (e.key === 'Escape') clearAll();

  if (e.key === 'Backspace') delateLast();
});

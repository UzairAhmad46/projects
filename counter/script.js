let count = 0;

const countEl = document.getElementById('count');

function updateDisplay() {
  countEl.textContent = count;
  countEl.classList.add('pop');
  setTimeout(() => countEl.classList.remove('pop'), 150);
}

document.getElementById('increment').addEventListener('click', () => {
  count++;
  updateDisplay();
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  updateDisplay();
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

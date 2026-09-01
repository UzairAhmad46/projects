const CHAR_SETS = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}',
};

const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const output = document.getElementById('password-output');
const errorMsg = document.getElementById('error-msg');
const strengthFill = document.getElementById('strength-fill');
const strengthLabel = document.getElementById('strength-label');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const checkboxes = {
  upper: document.getElementById('opt-upper'),
  lower: document.getElementById('opt-lower'),
  numbers: document.getElementById('opt-numbers'),
  symbols: document.getElementById('opt-symbols'),
};

function secureRandomChar(pool) {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return pool[arr[0] % pool.length];
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function updateStrengthMeter(length, poolSize) {
  const entropy = length * Math.log2(poolSize);
  let pct, label, color;

  if (entropy < 40) {
    pct = 25;
    label = 'Weak';
    color = '#ef4444';
  } else if (entropy < 60) {
    pct = 55;
    label = 'Fair';
    color = '#f59e0b';
  } else if (entropy < 80) {
    pct = 80;
    label = 'Strong';
    color = '#22c55e';
  } else {
    pct = 100;
    label = 'Very strong';
    color = '#22c55e';
  }

  strengthFill.style.width = pct + '%';
  strengthFill.style.background = color;
  strengthLabel.textContent = label;
  strengthLabel.style.color = color;
}

function generatePassword() {
  const activeSets = Object.keys(checkboxes).filter(
    (key) => checkboxes[key].checked,
  );

  if (activeSets.length === 0) {
    errorMsg.style.display = 'block';
    output.textContent = '';
    strengthFill.style.width = '0%';
    strengthLabel.textContent = '';
    return;
  }
  errorMsg.style.display = 'none';

  const length = parseInt(lengthSlider.value, 10);
  const pool = activeSets.map((key) => CHAR_SETS[key]).join('');

  // guarantee at least one char from each selected set, then fill the rest
  let chars = activeSets.map((key) => secureRandomChar(CHAR_SETS[key]));
  while (chars.length < length) {
    chars.push(secureRandomChar(pool));
  }
  chars = shuffle(chars.slice(0, length));

  const password = chars.join('');
  output.textContent = password;
  updateStrengthMeter(length, pool.length);
}

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
  generatePassword();
});

Object.values(checkboxes).forEach((cb) =>
  cb.addEventListener('change', generatePassword),
);
generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  if (!output.textContent) return;
  navigator.clipboard.writeText(output.textContent);
  const original = copyBtn.innerHTML;
  copyBtn.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  setTimeout(() => {
    copyBtn.innerHTML = original;
  }, 1200);
});

generatePassword();

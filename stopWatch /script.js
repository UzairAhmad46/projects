let startTime = 0;
let elapsed = 0;
let running = false;
let timerInterval;
let lapCount = 0;

const display = document.getElementById('display');
const msDisplay = document.getElementById('ms');
const startBtn = document.getElementById('startBtn');
const lapsEl = document.getElementById('laps');

function format(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  const ms = Math.floor((time % 1000) / 10);
  return {
    main: `${pad(hrs)}:${pad(mins)}:${pad(secs)}`,
    ms: pad(ms),
  };
}

function pad(n) {
  return n.toString().padStart(2, '0');
}

function update() {
  const time = elapsed + (Date.now() - startTime);
  const f = format(time);
  display.textContent = f.main;
  msDisplay.textContent = '.' + f.ms;
}

function toggle() {
  if (!running) {
    running = true;
    startTime = Date.now();
    timerInterval = setInterval(update, 10);
    startBtn.textContent = 'Stop';
    startBtn.classList.add('running');
  } else {
    running = false;
    elapsed += Date.now() - startTime;
    clearInterval(timerInterval);
    startBtn.textContent = 'Start';
    startBtn.classList.remove('running');
  }
}

function lap() {
  if (!running) return;
  lapCount++;
  const time = elapsed + (Date.now() - startTime);
  const f = format(time);
  const lapEl = document.createElement('div');
  lapEl.className = 'lap';
  lapEl.innerHTML = `<span>Lap ${lapCount}</span><span>${f.main}.${f.ms}</span>`;
  lapsEl.prepend(lapEl);
}

function reset() {
  running = false;
  clearInterval(timerInterval);
  elapsed = 0;
  display.textContent = '00:00:00';
  msDisplay.textContent = '.00';
  startBtn.textContent = 'Start';
  startBtn.classList.remove('running');
  lapsEl.innerHTML = '';
  lapCount = 0;
}

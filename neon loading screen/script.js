const messages = [
  'INITIALIZING SYSTEM',
  'CALIBRATING SENSORS',
  'LOADING NEURAL CORE',
  'ESTABLISHING UPLINK',
  'DECRYPTING DATA STREAM',
  'SYNCING SUBSYSTEMS',
  'FINALIZING BOOT SEQUENCE',
];

const percentEl = document.getElementById('percent');
const statusEl = document.getElementById('status');
const barFill = document.getElementById('barFill');
const barPercent = document.getElementById('barPercent');

let progress = 0;
let msgIndex = 0;

function tick() {
  progress += Math.random() * 3.2;
  if (progress > 100) progress = 100;

  const rounded = Math.round(progress);
  percentEl.textContent = rounded + '%';
  barPercent.textContent = rounded + '%';
  barFill.style.width = rounded + '%';

  const targetMsg = Math.min(
    messages.length - 1,
    Math.floor((progress / 100) * messages.length),
  );
  if (targetMsg !== msgIndex) {
    msgIndex = targetMsg;
    statusEl.textContent = messages[msgIndex];
  }

  if (progress < 100) {
    setTimeout(tick, 90 + Math.random() * 120);
  } else {
    statusEl.textContent = 'READY';
  }
}
tick();

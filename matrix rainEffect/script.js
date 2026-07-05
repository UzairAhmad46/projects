const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const fontSize = 18;

const characters =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*';

const letters = characters.split('');

let columns;
let drops = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.floor(canvas.width / fontSize);

  drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor((Math.random() * canvas.height) / fontSize);
  }
}

resize();

window.addEventListener('resize', resize);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    const x = i * fontSize;
    const y = drops[i] * fontSize;

    const gradient = ctx.createLinearGradient(0, y - 20, 0, y + 20);

    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.25, '#b8ffb8');
    gradient.addColorStop(1, '#00ff66');

    ctx.fillStyle = gradient;
    ctx.shadowBlur = 18;
    ctx.shadowColor = '#00ff66';

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

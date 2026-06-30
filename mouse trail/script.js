const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cursor = document.querySelector('.cursor');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();

window.addEventListener('resize', resize);

const colors = [
  '#00d4ff',
  '#00ffb3',
  '#8b5cf6',
  '#ff4ecd',
  '#ffd93d',
  '#ff6b6b',
];

const particles = [];

class particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.size = Math.random() * 10 + 4;
    this.speedX = (Math.random() - 0.5) * 4;
    this.speedY = (Math.random() - 0.5) * 4;
    this.alpha = 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.96;
    this.alpha -= 0.015;
  }

  draw() {
    ctx.save();

    ctx.globalAlpha = this.alpha;
    ctx.beginPath();

    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 30;

    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

window.addEventListener('mousemove', (e) => {
  cursor.animate(
    {
      left: e.clientX + 'px',
      top: e.clientY + 'px',
    },
    {
      duration: 80,
      fill: 'forwards',
    },
  );

  for (let i = 0; i < 4; i++) {
    particles.push(new particle(e.clientX, e.clientY));
  }
});

function animate() {
  ctx.fillStyle = 'rgba(5,8,22,.18)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].alpha <= 0 || particles[i].size <= 0.3) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animate);
}

animate();

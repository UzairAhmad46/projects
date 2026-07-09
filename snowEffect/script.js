const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

const flakes = [];
const FLAKE_COUNT = 300;

class Snowflake {
  constructor() {
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * canvas.width;
    this.y = initial ? Math.random() * canvas.height : -20;

    this.radius = Math.random() * 4 + 1;
    this.opacity = 0.3 + Math.random() * 0.7;

    this.speedY = 0.5 + Math.random() * 3;
    this.speedX = (Math.random() - 0.5) * 0.8;

    this.swing = Math.random() * Math.PI * 2;
    this.swingSpeed = 0.01 + Math.random() * 0.03;
  }

  update() {
    this.y += this.speedY;
    this.swing += this.swingSpeed;
    this.x += this.speedX + Math.sin(this.swing) * 0.5;

    if (
      this.y > canvas.height + 20 ||
      this.x > canvas.width + 50 ||
      this.x < -50
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < FLAKE_COUNT; i++) {
  flakes.push(new Snowflake());
}

function drawBackground() {
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);

  sky.addColorStop(0, '#0f172a');
  sky.addColorStop(0.5, '#1e293b');
  sky.addColorStop(1, '#475569');

  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  ctx.quadraticCurveTo(
    canvas.width * 0.25,
    canvas.height - 80,
    canvas.width * 0.5,
    canvas.height - 60,
  );

  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  ctx.fill();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();

  flakes.forEach((flake) => {
    flake.update();
    flake.draw();
  });
}

animate();

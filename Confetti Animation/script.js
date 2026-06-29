const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const color = [
  '#00d4ff',
  '#7c3aed',
  '#ff4ecd',
  '#ffd93d',
  '#00ff9d',
  '#ff6b6b',
];

let confetti = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -20;
    this.size = Math.random() * 12 + 6;
    this.color = color[Math.floor(Math.random() * color.length)];
    console.log(color);

    this.speedY = Math.random() * 5 + 3;
    this.speedX = (Math.random() - 0.5) * 4;
    this.rotation = Math.random() * 360;
    this.rotateSpeed = Math.random() * 10 - 5;
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;

    this.rotation += this.rotateSpeed;
  }
  draw() {
    ctx.save();

    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);

    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;

    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);

    ctx.restore();
  }
}

function createConfetti() {
  for (let i = 0; i < 250; i++) {
    confetti.push(new Particle());
  }
}

function animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((Particle, index) => {
    Particle.update();

    Particle.draw();
    if (Particle.y > canvas.height + 50) {
      confetti.splice(index, 1);
    }
  });

  requestAnimationFrame(animation);
}

animation();

document.getElementById('celebrate').onclick = () => {
  createConfetti();
};

window.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};

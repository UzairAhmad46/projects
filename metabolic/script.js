const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const COLORS = ['#a855f7', '#06b6d4', '#c084fc', '#22d3ee'];

class Ball {
  constructor(x, y, r, isCursor = false) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.baseR = r;
    this.vx = (Math.random() - 0.5) * 1.6;
    this.vy = (Math.random() - 0.5) * 1.6;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.isCursor = isCursor;
    this.pulse = Math.random() * Math.PI * 2;
    this.life = isCursor ? Infinity : 0;
    this.maxLife = 260;
  }
  update() {
    this.pulse += 0.03;
    if (this.isCursor) {
      this.x += (mouse.x - this.x) * 0.18;
      this.y += (mouse.y - this.y) * 0.18;
      this.r = this.baseR + Math.sin(this.pulse) * 4;
      return;
    }
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < this.r || this.x > canvas.width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > canvas.height - this.r) this.vy *= -1;
    this.x = Math.max(this.r, Math.min(canvas.width - this.r, this.x));
    this.y = Math.max(this.r, Math.min(canvas.height - this.r, this.y));
    this.r = this.baseR + Math.sin(this.pulse) * 3;
    this.life++;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let balls = [];

const AMBIENT_COUNT = 7;
for (let i = 0; i < AMBIENT_COUNT; i++) {
  balls.push(
    new Ball(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      26 + Math.random() * 34,
    ),
  );
}

const cursorBall = new Ball(mouse.x, mouse.y, 40, true);
balls.push(cursorBall);

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener(
  'touchmove',
  (e) => {
    const t = e.touches[0];
    if (t) {
      mouse.x = t.clientX;
      mouse.y = t.clientY;
    }
  },
  { passive: true },
);

canvas.addEventListener('click', (e) => {
  const b = new Ball(e.clientX, e.clientY, 18 + Math.random() * 14);
  balls.push(b);

  const spawned = balls.filter((x) => !x.isCursor && x.maxLife);
  if (spawned.length > 18) {
    const idx = balls.indexOf(spawned[0]);
    balls.splice(idx, 1);
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach((b) => b.update());

  balls = balls.filter((b) => b.isCursor || b.life < b.maxLife);

  balls.forEach((b) => b.draw());

  requestAnimationFrame(animate);
}
animate();

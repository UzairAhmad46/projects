const product = document.getElementById('product');
const wrap = document.getElementById('productWrap');

let isDragging = false;
let startX = 0,
  startY = 0;
let rotX = -18,
  rotY = 25;
let autoRotate = true;

function applyRotation() {
  product.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}
applyRotation();

function tick() {
  if (autoRotate && !isDragging) {
    rotY += 0.25;
    applyRotation();
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

function pointerDown(x, y) {
  isDragging = true;
  autoRotate = false;
  startX = x;
  startY = y;
}

function pointerMove(x, y) {
  if (!isDragging) return;
  const dx = x - startX;
  const dy = y - startY;
  rotY += dx * 0.4;
  rotX -= dy * 0.4;
  rotX = Math.max(-60, Math.min(60, rotX));
  startX = x;
  startY = y;
  applyRotation();
}

function pointerUp() {
  isDragging = false;
  setTimeout(() => {
    autoRotate = true;
  }, 2500);
}

wrap.addEventListener('mousedown', (e) => pointerDown(e.clientX, e.clientY));
window.addEventListener('mousemove', (e) => pointerMove(e.clientX, e.clientY));
window.addEventListener('mouseup', pointerUp);

wrap.addEventListener(
  'touchstart',
  (e) => {
    const t = e.touches[0];
    pointerDown(t.clientX, t.clientY);
  },
  { passive: true },
);
wrap.addEventListener(
  'touchmove',
  (e) => {
    const t = e.touches[0];
    pointerMove(t.clientX, t.clientY);
  },
  { passive: true },
);
wrap.addEventListener('touchend', pointerUp);

document.querySelectorAll('.swatch').forEach((sw) => {
  sw.addEventListener('click', () => {
    document.querySelector('.swatch.active').classList.remove('active');
    sw.classList.add('active');
  });
});

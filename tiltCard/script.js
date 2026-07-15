const stage = document.getElementById('stage');
const card = document.getElementById('card');
const glare = document.getElementById('glare');

const MAX_TILT = 14;

function handleMove(x, y) {
  const rect = stage.getBoundingClientRect();

  const px = (x - rect.left) / rect.width;
  const py = (y - rect.top) / rect.height;

  const tiltX = (py - 0.5) * -MAX_TILT * 2;
  const tiltY = (px - 0.5) * -MAX_TILT * 2;

  card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;

  glare.style.setProperty('--gx', `${px * 100}%`);
  glare.style.setProperty('--gy', `${py * 100}%`);
}

function resetTilt() {
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
}

stage.addEventListener('mousemove', (e) => {
  handleMove(e.clientX, e.clientY);
});

stage.addEventListener('mouseleave', resetTilt);

stage.addEventListener(
  'touchmove',
  (e) => {
    const t = e.touches[0];
    handleMove(t.clientX, t.clientY);
  },
  { passive: true },
);

stage.addEventListener('touchend', resetTilt);

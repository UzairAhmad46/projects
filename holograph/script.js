const card = document.getElementById('card');

const maxTilt = 14;

function handleMove(e) {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const px = x / rect.width;
  const py = y / rect.height;

  const rotateX = (0.5 - py) * maxTilt;
  const rotateY = (px - 0.5) * maxTilt;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  card.style.setProperty('--holo-x', `${px * 100}%`);
  card.style.setProperty('--holo-y', `${py * 100}%`);
}

function resetCard() {
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
}

card.addEventListener('mousemove', handleMove);
card.addEventListener('mouseleave', resetCard);

card.addEventListener(
  'touchmove',
  (e) => {
    const touch = e.touches[0];
    handleMove(touch);
  },
  { passive: true },
);

card.addEventListener('touchend', resetCard);

const card = document.getElementById('card');
card.addEventListener('mousemove', (e) => {
  const r = card.getBoundingClientRect();

  const x = (e.clientX - r.left) / r.width - 0.5;
  card.style.transform = `rotateY(${x * 10} deg) rotateX(${-y * 10}deg)scale(1.02)`;
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0) scale(1)';
  });
});

const face = document.getElementById('face');
for (let i = 0; i < 12; i++) {
  const tick = document.createElement('div');
  tick.className = 'tick';
  tick.style.transform = `rotate(${i * 30}deg)`;
  face.appendChild(tick);
}

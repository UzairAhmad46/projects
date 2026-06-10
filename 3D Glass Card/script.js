const card = document.querySelector('.card');
const glow = document.querySelector('.glow');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((x - centerX) / centerX) * 15;
  const rotateX = -((y - centerY) / centerY) * 15;

  const skew = rotateY * 0.15;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    skewX(${skew}deg)
    scale(1.03)
  `;

  card.style.boxShadow = `
    0 20px 60px rgba(0,255,255,.25),
    0 0 80px rgba(255,0,255,.25)
  `;
});

card.addEventListener('mouseleave', () => {
  card.style.transition =
    'transform .7s cubic-bezier(.22,1,.36,1), box-shadow .7s';

  card.style.transform = 'rotateX(0deg) rotateY(0deg) skewX(0deg) scale(1)';

  card.style.boxShadow = 'none';

  setTimeout(() => {
    card.style.transition = 'transform .15s ease-out, box-shadow .25s ease';
  }, 700);
});

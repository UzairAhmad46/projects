const card = document.querySelector('.card');
const reveal = document.querySelector('.reveal');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  reveal.style.setProperty('--x', `${x}px`);
  reveal.style.setProperty('--y', `${y}px`);
});

card.addEventListener('mouseenter', () => {
  reveal.style.opacity = '1';
});

card.addEventListener('mouseleave', () => {
  reveal.style.opacity = '0';
});

const cards = document.querySelectorAll('[data-tilt]');

cards.forEach(
  (card) =>
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.width / 2;

      const X = ((x - centerX) / centerX) * 8;
      const Y = ((y - centerY) / centerY) * 8;
      card.style.setProperty('--tx', rotateY + 'deg');
      card.style.setProperty('--ty', rotateX + 'deg');
    }),
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--tx', '0deg');
    card.style.setProperty('--ty', '0deg');
  }),
);

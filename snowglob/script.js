const FLAKE_COUNT = 60;
const field = document.getElementById('snowField');
const frag = document.createDocumentFragment();

for (let i = 0; i < FLAKE_COUNT; i++) {
  const flake = document.createElement('div');
  flake.className = 'flake';

  const size = 2 + Math.random() * 4;
  const left = Math.random() * 100;
  const duration = 4 + Math.random() * 5;
  const delay = Math.random() * 9;
  const drift = (Math.random() * 40 - 20).toFixed(1);
  const opacity = 0.5 + Math.random() * 0.5;

  flake.style.width = `${size}px`;
  flake.style.height = `${size}px`;
  flake.style.left = `${left}%`;
  flake.style.opacity = opacity;
  flake.style.setProperty('--drift', `${drift}px`);
  flake.style.animationDuration = `${duration}s`;
  flake.style.animationDelay = `-${delay}s`;

  frag.appendChild(flake);
}
field.appendChild(frag);

document.querySelector('.globe').addEventListener('click', () => {
  document.querySelectorAll('.flake').forEach((flake) => {
    flake.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    setTimeout(() => {
      flake.style.animationDuration = `${4 + Math.random() * 5}s`;
    }, 2500);
  });
});

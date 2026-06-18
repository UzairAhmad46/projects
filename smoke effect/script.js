const smoke = document.getElementById('smoke');

function createSmoke() {
  for (let i = 0; i < 3; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 80 + 60;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.setProperty('--x', `${Math.random() * 300 - 150}px`);

    particle.style.opacity = Math.random() * 0.5 + 0.3;

    smoke.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 5000);
  }
}

setInterval(createSmoke, 120);

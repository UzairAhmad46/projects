const ghost = document.querySelector('.ghost');

let mouseX = window.innerWidth / 2;

let mouseY = window.innerHeight / 2;

let currentX = mouseX;

let currentY = mouseY;

let angle = 0;

document.addEventListener('mousemove', (e) => {
  mouseY = e.clientY;
  mouseX = e.clientX;
});

function animate() {
  const dx = mouseX - currentX;
  const dy = mouseY - currentY;

  currentX += dx * 0.12;
  currentY += dy * 0.12;

  angle = Math.atan2(dy, dx) * (180 / Math.PI);

  ghost.style.left = `${currentX}px`;
  ghost.style.top = `${currentY}px`;

  ghost.style.transform = `translate(-50%,-50%)  rotate(${angle * 0.1}deg) scale(1.02)`;

  requestAnimationFrame(animate);
}

animate();

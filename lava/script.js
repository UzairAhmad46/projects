const lava = document.getElementById('lava');

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBlob() {
  const blob = document.createElement('div');
  blob.classList.add('blob');

  const size = random(120, 280);
  blob.style.width = `${size}px`;
  blob.style.height = `${size}px`;

  blob.style.setProperty('--x1', `${random(-10, 90)}vw`);
  blob.style.setProperty('--y1', `${random(-10, 90)}vh`);
  blob.style.setProperty('--x2', `${random(-10, 90)}vw`);
  blob.style.setProperty('--y2', `${random(-10, 90)}vh`);

  blob.style.animationDuration = `${random(12, 25)}s`;
  blob.style.animationDirection = 'alternate';
  blob.style.animationIterationCount = 'infinite';

  lava.appendChild(blob);
}

for (let i = 0; i < 12; i++) {
  createBlob();
}

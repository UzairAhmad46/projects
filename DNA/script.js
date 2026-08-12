const helix = document.getElementById('helix');
const RUNGS = 20;
const HEIGHT = 340;

for (let i = 0; i < RUNGS; i++) {
  const rung = document.createElement('div');
  rung.className = 'rung';
  rung.style.top = i * (HEIGHT / (RUNGS - 1)) + 'px';
  rung.style.transform = `translateX(-50%) rotateY(${i * (360 / RUNGS)}deg)`;

  rung.innerHTML = `
      <div class="bar"></div>
      <div class="node a"></div>
      <div class="node b"></div>
    `;

  helix.appendChild(rung);
}

function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now
    .toTimeString()
    .split(' ')[0];
}
updateClock();
setInterval(updateClock, 1000);

const latEl = document.getElementById('lat');
const lonEl = document.getElementById('lon');
let lat = 35.6812,
  lon = 139.7671;
setInterval(() => {
  lat += (Math.random() - 0.5) * 0.002;
  lon += (Math.random() - 0.5) * 0.002;
  latEl.textContent = lat.toFixed(4);
  lonEl.textContent = lon.toFixed(4);
}, 800);

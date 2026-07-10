const CONFIG = {
  blobCount: 4,
  blobSize: 30,
  trackWidth: 200,
  speed: 1.5,
  stagger: 0.15,
  scaleBoost: 1.15,
};

const wrap = document.getElementById('gooWrap');
const blobs = [];

for (let i = 0; i < CONFIG.blobCount; i++) {
  const el = document.createElement('div');
  el.className = 'blob';
  el.style.width = CONFIG.blobSize + 'px';
  el.style.height = CONFIG.blobSize + 'px';
  wrap.appendChild(el);
  blobs.push(el);
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const travelRange = CONFIG.trackWidth - CONFIG.blobSize - 20;

function animate(timeMs) {
  const time = timeMs / 1000;
  blobs.forEach((blob, i) => {
    const t = ((time * CONFIG.speed) / 2 + i * CONFIG.stagger) % 1;
    const pinpPong = t < 0.5 ? t * 2 : (1 - t) * 2;
    const eased = easeInOutQuad(pinpPong);

    const x = 10 + eased * travelRange;
    blob.style.left = x + 'px';
    blob.style.transform = ` translateY(-50%) scale(${1 + Math.sin(pinpPong * Math.PI) * (CONFIG.scaleBoost - 1)})`;
  });
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

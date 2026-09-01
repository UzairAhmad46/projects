const wrap = document.getElementById('sliderWrap');
const beforeWrap = document.getElementById('beforeWrap');
const divider = document.getElementById('divider');
const handle = document.getElementById('handle');

let dragging = false;

function setPosition(clientX) {
  const rect = wrap.getBoundingClientRect();
  let x = clientX - rect.left;
  x = Math.max(0, Math.min(x, rect.width));
  const percent = (x / rect.width) * 100;
  beforeWrap.style.width = percent + '%';
  divider.style.left = percent + '%';
  handle.style.left = percent + '%';
}

function startDrag(e) {
  dragging = true;
  wrap.style.cursor = 'grabbing';
}

function endDrag() {
  dragging = false;
  wrap.style.cursor = 'ew-resize';
}

function onMove(e) {
  if (!dragging) return;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  setPosition(clientX);
}

handle.addEventListener('mousedown', startDrag);
wrap.addEventListener('mousedown', (e) => {
  startDrag(e);
  setPosition(e.clientX);
});
window.addEventListener('mousemove', onMove);
window.addEventListener('mouseup', endDrag);

handle.addEventListener('touchstart', startDrag, { passive: true });
wrap.addEventListener(
  'touchstart',
  (e) => {
    startDrag(e);
    setPosition(e.touches[0].clientX);
  },
  { passive: true },
);
window.addEventListener('touchmove', onMove, { passive: true });
window.addEventListener('touchend', endDrag);

wrap.addEventListener('click', (e) => {
  if (!e.touches) setPosition(e.clientX);
});

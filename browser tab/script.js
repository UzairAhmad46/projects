const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const backdrop = document.getElementById('backdrop');
const sheet = document.getElementById('sheet');
const handle = document.getElementById('handle');

function openSheet() {
  backdrop.classList.add('show');
  sheet.classList.add('show');
}

function closeSheet() {
  backdrop.classList.remove('show');
  sheet.classList.remove('show');
}

openBtn.addEventListener('click', openSheet);
closeBtn.addEventListener('click', closeSheet);
backdrop.addEventListener('click', closeSheet);

let startY = 0;
let currentY = 0;
let dragging = false;

function dragStart(y) {
  dragging = true;
  startY = y;
  currentY = 0;
  sheet.classList.add('dragging');
}

function dragMove(y) {
  if (!dragging) return;
  currentY = Math.max(0, y - startY);
  sheet.style.transform = `translate(-50%, ${currentY}px)`;
}

function dragEnd() {
  if (!dragging) return;
  dragging = false;
  sheet.classList.remove('dragging');
  sheet.style.transform = '';

  if (currentY > 100) {
    closeSheet();
  }
}

handle.addEventListener('mousedown', (e) => dragStart(e.clientY));
window.addEventListener('mousemove', (e) => dragMove(e.clientY));
window.addEventListener('mouseup', dragEnd);

handle.addEventListener('touchstart', (e) => dragStart(e.touches[0].clientY));
handle.addEventListener('touchmove', (e) => dragMove(e.touches[0].clientY));
handle.addEventListener('touchend', dragEnd);

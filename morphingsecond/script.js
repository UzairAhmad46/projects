const card = document.getElementById('card');
const blob1 = document.getElementById('blob1');
const blob2 = document.getElementById('blob2');
const blob3 = document.getElementById('blob3');
const pulse = document.querySelector('.pulse');

card.addEventListener('mousemove', (e) => {
  let rect = card.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  let cx = (rect = rect.width / 2);
  let cy = (rect = rect.height / 2);
  let dx = (x - cx) / cx;
  let dy = (y - cy) / cy;
  blob1.style.transform = `translate(${dx * 18}px,${dy * 18}px)
  `;

  blob2.style.transform = `translate(${dx * 30}px,${dy * 30}px)
  `;
  blob3.style.transform = `translate(${dx * -24}px,${dy * -24}px)
  `;
  pulse.style.left = x + 'px';
  pulse.style.top = y + 'px';

  const titlX = dy * -6;
  const tiltY = dx * 6;
  card.style.transform = `rotateX(${titlX}deg) rotateY(${tiltY}deg)scale(1.02)`;
});

card.addEventListener('mouseleave', () => {
  blob1.style.transform = '';
  blob3.style.transform = '';
  blob3.style.transform = '';
});
    
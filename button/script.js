document.querySelector('.neon-btn').addEventListener('click', function (e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  const rect = this.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

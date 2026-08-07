document.querySelectorAll('.range-tabs button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.range-tabs .active')?.classList.remove('active');
    btn.classList.add('active');
  });
});

const form = document.getElementById('loginForm');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  btn.classList.add('loading');
  setTimeout(() => {
    btn.classList.remove('loading');
    btn.querySelector('.btn-text').textContent = 'Success ✓ ';
    setTimeout(() => {
      btn.querySelector('btn.text').textContent = 'Sign In ';
    }, 1500);
  }, 1600);
});

const pwd = document.getElementById('pwd');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  const isPassword = pwd.type === 'password';
  pwd.type = isPassword ? 'text' : 'password';
  toggleBtn.classList.toggle('active', isPassword);
  toggleBtn.setAttribute(
    'aria-label',
    isPassword ? 'Hide password' : 'Show password',
  );
});

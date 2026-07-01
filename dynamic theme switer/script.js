const body = document.body;

const modeBtn = document.getElementById('modeBtn');
const colors = document.querySelectorAll('.color');

const saveMode = localStorage.getItem('theme');
const savedColor = localStorage.getItem('accent');
if (saveMode === 'dark') {
  body.classList.add('dark');
  modeBtn.innerHTML = ' ☀️ Light Mode';
}

if (savedColor) {
  document.documentElement.style.setProperty('--accent', savedColor);

  colors.forEach((color) => {
    color.classList.add('active');
  });
}

modeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const dark = body.classList.contains('dark');

  modeBtn.innerHTML = dark ? ' ☀️ Light Mode' : ' 🌙 Dark Mode';

  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

colors.forEach((color) => {
  color.addEventListener('click', () => {
    colors.forEach((c) => {
      c.classList.remove('active');
    });
    color.classList.add('active');
    const accent = color.dataset.color;

    document.documentElement.style.setProperty('--accent', accent);
    localStorage.setItem('accent', accent);
  });
});

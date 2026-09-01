' ';

const toggle = document.getElementById('themeToggle');
const themIcon = document.getElementById('thumbIcon');

const root = document.documentElement;

const saved = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefer-color-scheme.light)').matches;

const initial = saved || (prefersLight ? 'light' : 'dark');
setTheme(initial);

toggle.addEventListener('change', () => {
  setTheme(toggle.checked ? 'light' : 'dark');
});

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  toggle.checked = theme === 'light';
  thumbIcon.textContent = theme === 'light' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

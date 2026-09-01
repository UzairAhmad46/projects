const bar = document.getElementById('searchBar');
const input = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const suggestions = document.getElementById('suggestions');
const items = [...document.querySelectorAll('.sug-item')];
let activeIndex = -1;

function openSuggestions() {
  suggestions.classList.add('open');
}
function closeSuggestions() {
  suggestions.classList.remove('open');
  activeIndex = -1;
  items.forEach((i) => i.classList.remove('active'));
}

input.addEventListener('focus', () => {
  bar.classList.add('focused');
  openSuggestions();
});

input.addEventListener('blur', () => {
  setTimeout(() => {
    bar.classList.remove('focused');
    closeSuggestions();
  }, 150);
});

input.addEventListener('input', () => {
  bar.classList.toggle('has-text', input.value.length > 0);
  const q = input.value.toLowerCase();
  items.forEach((item) => {
    const match = item.textContent.toLowerCase().includes(q);
    item.style.display = match ? 'flex' : 'none';
  });
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  bar.classList.remove('has-text');
  items.forEach((i) => (i.style.display = 'flex'));
  input.focus();
});

items.forEach((item) => {
  item.addEventListener('mousedown', () => {
    input.value = item.textContent
      .trim()
      .replace(/CSS|JS|SVG/g, '')
      .trim();
    bar.classList.add('has-text');
    closeSuggestions();
  });
});

document.addEventListener('keydown', (e) => {
  if (document.activeElement !== input) return;
  const visible = items.filter((i) => i.style.display !== 'none');

  if (e.key === 'Escape') {
    input.blur();
    closeSuggestions();
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex = (activeIndex + 1) % visible.length;
    visible.forEach((i) => i.classList.remove('active'));
    visible[activeIndex].classList.add('active');
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex = (activeIndex - 1 + visible.length) % visible.length;
    visible.forEach((i) => i.classList.remove('active'));
    visible[activeIndex].classList.add('active');
  }
  if (e.key === 'Enter' && activeIndex >= 0) {
    visible[activeIndex].dispatchEvent(new Event('mousedown'));
  }
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    input.focus();
  }
});

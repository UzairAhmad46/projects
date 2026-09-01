const width = document.getElementById('width');
const style = document.getElementById('style');
const color = document.getElementById('color');
const radius = document.getElementById('radius');
const shadow = document.getElementById('shadow');
const shadowColor = document.getElementById('shadowColor');

const widthVal = document.getElementById('widthVal');
const radiusVal = document.getElementById('radiusVal');
const shadowVal = document.getElementById('shadowVal');

const box = document.getElementById('preview-box');
const codeOutput = document.getElementById('codeOutput');
const copyBtn = document.getElementById('copyBtn');

function update() {
  const w = width.value + 'px';
  const r = radius.value + 'px';
  const s = shadow.value + 'px';

  widthVal.textContent = w;
  radiusVal.textContent = r;
  shadowVal.textContent = s;

  const borderCSS = `${w} ${style.value} ${color.value}`;
  const shadowCSS = shadow.value > 0 ? `0 0 ${s} ${shadowColor.value}` : 'none';

  box.style.border = borderCSS;
  box.style.borderRadius = r;
  box.style.boxShadow = shadowCSS;

  const css = `border: ${borderCSS};
border-radius: ${r};${shadow.value > 0 ? `\nbox-shadow: ${shadowCSS};` : ''}`;

  codeOutput.textContent = css;
}

[width, style, color, radius, shadow, shadowColor].forEach((el) =>
  el.addEventListener('input', update),
);

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(codeOutput.textContent);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => (copyBtn.textContent = 'Copy'), 1200);
});

update();

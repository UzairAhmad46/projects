const text = document.getElementById('text');
const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(text.value.trim());

    copyBtn.innerHTML = `
          <i class="fa-solid fa-check"></i>
          Copied!
        `;

    setTimeout(() => {
      copyBtn.innerHTML = `
            <i class="fa-regular fa-copy"></i>
            Copy Text
          `;
    }, 2000);
  } catch (error) {
    alert('Failed to copy text.');
  }
});

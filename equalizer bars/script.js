const bars = document.querySelectorAll('.bar');

function animateBars() {
  bars.forEach((bar) => {
    const randomHeight = Math.floor(Math.random() * 180) + 20;
    bar.style.height = `${randomHeight}px`;
  });
}

setInterval(animateBars, 120);

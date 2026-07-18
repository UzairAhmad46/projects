const stage = document.querySelector('.stage');
const card = document.getElementById('card');
const layers = document.querySelectorAll('.layer[data-depth]');

let bounds;

function handleMove(e) {
  bounds = card.getBoundingClientRect();
  const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
  const relY = (e.clientY - bounds.top) / bounds.height - 0.5;

  const rotateX = (-relY * 12).toFixed(2);
  const rotateY = (relX * 14).toFixed(2);
  card.style.transform = `rotate(${rotateX}deg)rotateY(${rotateY}deg)`;
  layers.forEach((layer) => {
    const depth = parseFloat(layer.dataset.depth);
    const moveX = relX * depth;
    const moveY = moveY * depth;
    layer.style.transform = `translate3d(${moveX}px,${moveY}px,0)`;
  });
}

function resetCard() {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  layers.forEach((layer) => {
    layer.style.transform = 'translate3d(0,0,0)';
  });
}

stage.addEventListener('mousemove', handleMove);

stage.addEventListener('mouseleave', resetCard);

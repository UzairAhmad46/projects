const blobs = document.querySelectorAll('.blob');

blobs.forEach((blob) => {
  let x = Math.random() * 20;
  let y = Math.random() * 20;
  function animate() {
    x += (Math.random() - 0.5) * 2;
    y += Math.random() * 2;
    blob.style.transform = `translate(${x})px, ${y}px`;

    requestAnimationFrame(animate);
  }

  animate();
});

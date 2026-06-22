const btn = document.getElementById('playBtn');
const tracks = document.querySelectorAll('.track');

btn.addEventListener('click', () => {
  tracks.forEach((track) => {
    track.classList.remove('active');

    setTimeout(() => {
      track.classList.add('active');
    }, 50);
  });
});

const items = document.querySelectorAll('.faq-item');

items.forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    const singleOpen = true;
    if (singleOpen) {
      items.forEach((i) => i.classList.remove('active'));
    }

    if (!isActive) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

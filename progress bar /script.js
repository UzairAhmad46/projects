let value = 45;

const track = document.getElementById('track');
const fill = document.getElementById('fill');
const handle = document.getElementById('handle');
const percent = document.getElementById('percent');
const status = document.getElementById('status');

function update() {
  fill.style.width = value + '%';
  handle.style.left = value + '%';
  percent.textContent = value + '%';

  if (value >= 100) {
    status.textContent = 'complete';
  } else if (value >= 75) {
    status.textContent = 'Almost There';
  } else if (value >= 25) {
    status.textContent = 'In progress';
  } else {
    status.textContent = 'Just Started';
  }
}

let dragging = false;

function setValueFromX(clientX) {
  let position = clientX - track.getBoundingClientRect().left;
  value = Math.round((position / track.offsetWidth) * 100);

  if (value < 0) value = 0;
  if (value > 100) value = 100;

  update();
}

track.addEventListener('click', function (e) {
  setValueFromX(e.clientX);
});

track.addEventListener('mousemove', function (e) {
  dragging = true;
  setValueFromX(e.clientX);
});

window.addEventListener('mousemove', function (e) {
  if (dragging) {
    setValueFromX(e.clientX);
  }
});

window.addEventListener('mouseup', function (e) {
  dragging = false;
});

document.getElementById('plus').onclick = function () {
  value += 5;
  if (value > 100) {
    value = 100;
  }

  update();
};

document.getElementById('minus').onclick = function () {
  value -= 5;
  if (value < 0) {
    value = 0;
  }
  update();
};

update();

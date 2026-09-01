function updateStatus() {
  const toggle = document.getElementById('toggle');
  document.getElementById('statusText').textContent = toggle.checked
    ? 'ON'
    : 'OFF';
}

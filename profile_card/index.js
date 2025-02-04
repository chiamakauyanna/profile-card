function updateTime() {
  document.getElementById('utc-time').textContent = `Current Time: ${new Date().toUTCString()}`;
}
updateTime();
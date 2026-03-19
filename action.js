document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('breakToggle');
  const body = document.body;
  let breakAvoidEnabled = true;

  toggleBtn.addEventListener('click', function() {
    breakAvoidEnabled = !breakAvoidEnabled;

    if (breakAvoidEnabled) {
      body.classList.remove('no-break-inside');
      toggleBtn.textContent = 'Disable Break-Inside';
      console.log('break-inside: avoid enabled');
    } else {
      body.classList.add('no-break-inside');
      toggleBtn.textContent = 'Enable Break-Inside';
      console.log('break-inside: avoid disabled');
    }
  });

  // Set initial button text
  toggleBtn.textContent = 'Disable Break-Inside';
});
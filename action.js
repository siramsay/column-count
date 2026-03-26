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


  const toggleBtnM = document.getElementById('breakToggleM');
  //const body = document.body;
  let marginEnabled = true;

  toggleBtnM.addEventListener('click', function() {
    marginEnabled = !marginEnabled;

    if (marginEnabled) {
      body.classList.remove('no-margin');
      toggleBtnM.textContent = 'Disable Margin Bottom';
    } else {
      body.classList.add('no-margin');
      toggleBtnM.textContent = 'Enable Margin Bottom';
    }
  });

  // Set initial button text
  toggleBtnM.textContent = 'Disable Margin Bottom';

});
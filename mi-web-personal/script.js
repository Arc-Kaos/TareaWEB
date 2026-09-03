const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = 'Modo Claro';
  } else {
    themeBtn.textContent = 'Modo Oscuro';
  }
});
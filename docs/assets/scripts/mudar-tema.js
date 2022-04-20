const toggleDarkMode = document.querySelector('.js-mudar-tema');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    jtd.setTheme('dark');
}

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    //toggleDarkMode.textContent = 'Tema escuro';
  } else {
    jtd.setTheme('dark');
    //toggleDarkMode.textContent = 'Tema claro';
  }
});


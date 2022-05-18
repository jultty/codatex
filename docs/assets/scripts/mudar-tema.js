const toggleDarkMode = document.querySelector('.js-mudar-tema');
var storedTheme = localStorage.getItem('storedTheme');

// sem configurações de tema pré-configuradas ou fornecidas
if (storedTheme == undefined) {
    if (!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        jtd.setTheme('light');
    }
}

// configurações de tema fornecidas anteriormente
if (storedTheme == 'light') {
    jtd.setTheme('light');
}

// interação com botão de troca do tema
jtd.addEvent(toggleDarkMode, 'click', function(){

    // tema atual é o padrão (escuro)
    if (jtd.getTheme() === 'dark' || jtd.getTheme() === 'default') {
    jtd.setTheme('light');
    localStorage.setItem('storedTheme', 'light');
    let storedTheme = localStorage.getItem('storedTheme');

  // tema atual é claro
  } else {
    jtd.setTheme('dark');
    localStorage.setItem('storedTheme', 'dark');
    let storedTheme = localStorage.getItem('storedTheme');
  }
});


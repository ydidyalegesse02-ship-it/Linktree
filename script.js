alert("Benvenuto nel mio sito!");

const pulsante = document.getElementById('theme-toggle');
const corpo = document.body;

pulsante.addEventListener('click', () => {

  corpo.classList.toggle('dark-mode');

    if (corpo.classList.contains('dark-mode')) {
        pulsante.innerText = "☀️ Luce";
          } else {
              pulsante.innerText = "🌙 Tema";
                }

                });
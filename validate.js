function openNav() {
    alert("teste")
}


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.querySelector(".main-title");
typeWriter(titulo);

//menu hamburguer
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
 




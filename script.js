// Hacemos que el Menú se abra al hacerle click, creando la clase 'open' 
// en estilos SASS.
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function() {
    navigation.classList.toggle('open');
}

// Hacemos que los links se activen al hacer click.

const list = document.querySelectorAll('.list');

function activarLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active'); // "this" se refiere al elementon del DOM que desencadena el Evento
}

list.forEach((item) => 
    item.addEventListener('click', activarLink)
)
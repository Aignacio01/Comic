const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir-menu');
const cerrar = document.querySelector('#cerrar-menu');


abrir.addEventListener('click', function() {
    nav.classList.add('visible');
    cerrar.style.display = 'block';
});
cerrar.addEventListener('click', function() {
    nav.classList.remove('visible')
    cerrar.style.display = 'none';

});a
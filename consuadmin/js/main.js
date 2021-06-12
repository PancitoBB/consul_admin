//Funcion para seleccionar el elemento

const selectElement = (s) => document.querySelector(s);
// Abrir el menu con el click

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav__list').classList.add('active');
});

// Cerrar el menu con el click

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav__list').classList.remove('active');
});
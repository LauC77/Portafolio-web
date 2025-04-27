document.addEventListener('DOMContentLoaded', function() {
    const botonModo = document.getElementById('modo-btn');
    const body = document.body;
    const textoModo = document.getElementById('modo-texto'); // Elemento para el texto

    // Comprobar la preferencia guardada en localStorage
    if (localStorage.getItem('modo') === 'oscuro') {
        body.classList.add('modo-oscuro'); // Aplicamos la clase para el modo oscuro
        botonModo.textContent = '☀️'; // Sol para el modo claro
        textoModo.textContent = 'Modo Día'; // Cambiar texto a 'Modo Día'
    } else {
        body.classList.remove('modo-oscuro'); // Aseguramos que el modo oscuro esté desactivado
        botonModo.textContent = '🌙'; // Luna para el modo oscuro
        textoModo.textContent = 'Modo Noche'; // Cambiar texto a 'Modo Noche'
    }

    botonModo.addEventListener('click', () => {
        // Añadir un retraso en la transición antes de cambiar el fondo
        setTimeout(() => {
            body.classList.toggle('modo-oscuro'); // Alterna la clase para el modo oscuro

            // Guardamos la preferencia del modo en localStorage
            if (body.classList.contains('modo-oscuro')) {
                botonModo.textContent = '☀️'; // Sol para el modo claro
                textoModo.textContent = 'Modo Día'; // Cambiar el texto a 'Modo Día'
                localStorage.setItem('modo', 'oscuro'); // Guardamos la preferencia como 'oscuro'
            } else {
                botonModo.textContent = '🌙'; // Luna para el modo oscuro
                textoModo.textContent = 'Modo Noche'; // Cambiar el texto a 'Modo Noche'
                localStorage.setItem('modo', 'claro'); // Guardamos la preferencia como 'claro'
            }
        }, 50); // Retraso de 50ms para que la transición sea visible
    });
});


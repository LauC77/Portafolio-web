// Inicializar EmailJS con tu Public Key
emailjs.init("7rhkZaWpZ8SsbectW"); // Sustituye con tu Public Key de EmailJS
console.log('EmailJS inicializado');
// Obtener el formulario y añadir el evento de envío
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    // Crear un objeto con los datos del formulario
    const templateParams = {
        name: name,
        from_email: email, // <-- Aquí importante: 'from_email' no 'email'
        message: message,
        time: new Date().toLocaleString()
    };
      
    // Enviar los datos a través de EmailJS
    emailjs.send("service_tisd1q4", "template_10yhf4f", templateParams)
    .then(function(response) {
        console.log('Mensaje enviado:', response);
        alert("¡Mensaje enviado con éxito!");
    }, function(error) {
        console.log('Error al enviar el mensaje:', error);
        alert("Hubo un error, por favor intenta nuevamente.");
    });
});

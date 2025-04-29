// Obtenemos el selector de idioma y los elementos que vamos a cambiar
const languageSelectDesktop = document.getElementById('language-select');
const languageSelectMobile = document.getElementById('language-select-mobile')


// Definimos los textos en español e inglés
const translations = {
    es: {
        saludo: {
            bio: "¡Hola, soy Laura!",
            bienvenida: "¡Bienvenidos a mi portafolio web!",
            descripcion: "Soy una desarrolladora creativa y apasionada, estoy ampliando mis conocimientos en sistemas e ingeniería y buscando nuevas oportunidades donde pueda aplicar mis habilidades en desarrollo web, diseño de interfaces y creación de experiencias digitales atractivas y funcionales.",
            proyecto: "Fui parte del proyecto ONE ORACLE NEXT EDUCATION con Alura Latam y estoy entusiasmada por demostrar mi talento y dedicación en el mundo del desarrollo web.",
            explora: "¡Explora mi portafolio y descubre mi potencial!"
        },
        menu: {
            sobreMi: "Sobre mi",
            skills: "Skills",
            hobbies: "Hobbies",
            formacion: "Formación",
            proyectos: "Proyectos",
            contacto: "Contacto"
        },
        modo: {
            noche: "Modo Noche"
        },
        sobreMi: {
            titulo: "Sobre",
            quien: "¿Quién es Laura?",
            descripcion1: "Ingeniera de sistemas en formación y desarrolladora web front-end. Tengo experiencia en atención al cliente y una base profesional en obras civiles, lo que me ha brindado habilidades de comunicación, gestión y análisis.",
            descripcion2: "Me apasiona crear interfaces atractivas y funcionales, y estoy en constante aprendizaje para perfeccionar mis conocimientos en tecnologías web. Estoy lista para asumir nuevos desafíos y construir experiencias digitales excepcionales.",
            descripcion3: "No dudes en contactarme para discutir cómo podemos colaborar y crear experiencias web excepcionales juntos. Estoy lista para enfrentar nuevos desafíos y hacer realidad tus ideas digitales."
        },
        hobbies: {
            lista: ["Moda", "Fotografía", "Música", "Viajar"]
        },
        formacion: {
            
    titulo: "Formación",
    estudios: [
        {
            titulo: "Ingeniera en Sistemas",
            institucion: "Universidad Minuto de Dios",
            fecha: "En curso"
        },
        {
            titulo: "Desarrolladora Front End",
            institucion: "Alura Latam",
            fecha: "Marzo 2023"
        },
        {
            titulo: "MySQL",
            institucion: "Alura Latam",
            fecha: "2023"
        },
        {
            titulo: "Tecnóloga en gestión de obras civiles y construcciones",
            institucion: "Universidad Nacional Abierta y a Distancia UNAD",
            fecha: "Abril 2023"
        }
    ],
    verCertificado: "Ver certificado"
    }, 
    tituloProyectos: "Proyectos",
    proyectos: {
        "summerce": {
            titulo: "Página web Summercé Restaurante",
            descripcion: "Es una página web para un restaurante de la ciudad de Moniquirá Boyacá, cuenta con varias secciones que muestran al cliente la escencia del restaurante y le facilitan hacer sus pedidos, reservas, comunicación, etc.",
            demo: "Ver demo",
            repo: "Repositório"
        },
        "org": {
            titulo: "Formulario de colaboradores",
            descripcion: "Es una plataforma colaborativa diseñada para facilitar la gestión de colaboradores y equipos en proyectos.",
            demo: "Ver demo",
            repo: "Repositório"
        },
        "alurafood": {
            titulo: "AluraFood - Formulario de Servicio de Comida a Domicilio",
            descripcion: "Es un proyecto de formulario diseñado para un servicio de comida a domicilio. El objetivo principal de este proyecto es permitir a los usuarios realizar pedidos de comida en línea de manera rápida y conveniente.",
            demo: "Ver demo",
            repo: "Repositório"
        },
        "barberia": {
            titulo: "Barberia Alura",
            descripcion: "Es la página web de ejemplo para una barberia local, allí se destacan los servicios y permite a los visitantes contactar y obtener más información sobre los servicios ofrecidos.",
            demo: "Ver demo",
            repo: "Repositório"
        },
        "petshop": {
            titulo: "Formulario de registro para Usuarios-Petshop",
            descripcion: "Es un prototipo de formulario de registro interactivo y fácil de usar para los usuarios que deseen registrarse en una tienda de artículos para mascotas.",
            demo: "Ver demo",
            repo: "Repositório"
        },
        "quizdev": {
            titulo: "Quiz Dev App",
            descripcion: "Consiste en el desarrollo de una aplicación web interactiva, que ofrece a los usuarios un quiz con preguntas básicas de programación, lo que permite a los principiantes en programación poner a prueba sus conocimientos.",
            demo: "Ver demo",
            repo: "Repositório"
        },
        "movies": {
            titulo: "Movies Lav",
            descripcion: "Consiste en el desarrollo de un sitio web donde se pueden encontrar gran variedad de películas, hacer la búsqueda de alguna en especial, ver el título, la portada, la calificación, y una breve descripción.",
            demo: "Ver demo",
            repo: "Repositório"
        },
        "nocturnos": {
            titulo: "Nocturnos Gaming",
            descripcion: "Es un proyecto que destaca el canal de YouTube 'Nocturnos Gaming'. Muestra los cuatro últimos videos publicados por el canal, brindando un vistazo rápido y conveniente al contenido más reciente.",
            demo: "Ver demo",
            repo: "Repositório"
        }
    }, 
    contacto:{
        tituloContacto: "Contacto",
        subtitulo: "¿Quieres contactarme?",
        internet: "En internet:",
    },
    formulario: {
        tituloFormulario: "Formulario de Contacto",
        nombre: "Nombre:",
        correo: "Correo electrónico:",
        mensaje: "Mensaje:",
        enviar: "Enviar",
        placeholderNombre: "Tu nombre",
        placeholderCorreo: "Tu correo electrónico",
        placeholderMensaje: "Escribe tu mensaje"
    }, 
    derechos:{
        creditos: "Hecho con amor desde "
    }
},
    en: {
        saludo: {
            bio: "Hello, I'm Laura!",
            bienvenida: "Welcome to my web portfolio!",
            descripcion: "I'm a creative and passionate developer, expanding my knowledge in systems and engineering and looking for new opportunities where I can apply my skills in web development, interface design, and creating attractive and functional digital experiences.",
            proyecto: "I was part of the ONE ORACLE NEXT EDUCATION project with Alura Latam and I'm excited to show my talent and dedication in the web development world.",
            explora: "Explore my portfolio and discover my potential!"
        },
        menu: {
            sobreMi: "About Me",
            skills: "Skills",
            hobbies: "Hobbies",
            formacion: "Education",
            proyectos: "Projects",
            contacto: "Contact"
        },
        modo: {
            noche: "Night Mode"
        },
        sobreMi: {
            titulo: "About",
            quien: "Who is Laura?",
            descripcion1: "Systems engineer in training and front-end web developer. I have experience in customer service and a professional background in civil works, which has given me communication, management, and analysis skills.",
            descripcion2: "I'm passionate about creating attractive and functional interfaces, and I'm constantly learning to perfect my knowledge in web technologies. I'm ready to take on new challenges and build exceptional digital experiences.",
            descripcion3: "Feel free to contact me to discuss how we can collaborate and create exceptional web experiences together. I'm ready to take on new challenges and bring your digital ideas to life."
        }, 
        hobbies: {
            lista: ["Fashion", "Photography", "Music", "Travel"]
        },
        formacion: {
            titulo: "Education",
            estudios: [
                {
                    titulo: "Systems Engineer",
                    institucion: "Minuto de Dios University",
                    fecha: "In progress"
                },
                {
                    titulo: "Front-End Developer",
                    institucion: "Alura Latam",
                    fecha: "March 2023"
                },
                {
                    titulo: "MySQL",
                    institucion: "Alura Latam",
                    fecha: "2023"
                },
                {
                    titulo: "Technologist in Civil Works Management and Construction",
                    institucion: "UNAD - Open and Distance National University",
                    fecha: "April 2023"
                }
            ],
            verCertificado: "See certificate"
        },
        tituloProyectos: "Projects",
        proyectos: {
            "summerce": {
                titulo: "Summercé Restaurant Website",
                descripcion: "This is a website for a restaurant in Moniquirá, Boyacá. It includes several sections that showcase the essence of the restaurant and make it easier for customers to place orders, make reservations, and communicate.",
                demo: "View demo",
                repo: "Repository"
            },
            "org": {
                titulo: "Collaborators Form",
                descripcion: "This is a collaborative platform designed to streamline the management of collaborators and teams in projects.",
                demo: "View demo",
                repo: "Repository"
            },
            "alurafood": {
                titulo: "AluraFood - Food Delivery Form",
                descripcion: "This project consists of a form designed for a food delivery service. Its main goal is to allow users to place food orders online quickly and conveniently.",
                demo: "View demo",
                repo: "Repository"
            },
            "barberia": {
                titulo: "Barberia Alura",
                descripcion: "This is a sample website for a local barber shop, highlighting its services and allowing visitors to contact and learn more about the services offered.",
                demo: "View demo",
                repo: "Repository"
            },
            "petshop": {
                titulo: "User Registration Form - Petshop",
                descripcion: "This is a prototype of an interactive and easy-to-use registration form for users wishing to sign up for a pet store.",
                demo: "View demo",
                repo: "Repository"
            },
            "quizdev": {
                titulo: "Quiz Dev App",
                descripcion: "This project is an interactive web app that offers a quiz with basic programming questions, allowing beginners in programming to test their knowledge.",
                demo: "View demo",
                repo: "Repository"
            },
            "movies": {
                titulo: "Movies Lav",
                descripcion: "This project is a website where users can find a wide variety of movies, search for specific ones, view the title, poster, rating, and a brief description.",
                demo: "View demo",
                repo: "Repository"
            },
            "nocturnos": {
                titulo: "Nocturnos Gaming",
                descripcion: "This project highlights the 'Nocturnos Gaming' YouTube channel. It shows the latest four videos published by the channel, giving visitors a quick and convenient view of the newest content.",
                demo: "View demo",
                repo: "Repository"
            }
        },
        contacto:{
            tituloContacto: "Contact",
            subtitulo: "Want to contact me?",
            internet: "Online: ",
        },
        formulario: {
            tituloFormulario: "Contact Form",
            nombre: "Name:",
            correo: "Email:",
            mensaje: "Message:",
            enviar: "Send",
            placeholderNombre: "Your name",
            placeholderCorreo: "Your email",
            placeholderMensaje: "Write your message"
        },
        derechos:{
            creditos: "Make with love since "
        }
    }
};


// Función para actualizar el idioma
function changeLanguage(language) {
    // Actualizar textos de saludo
    document.querySelector('.title__bio').textContent = translations[language].saludo.bio;
    document.querySelector('.title__soy').textContent = translations[language].saludo.bienvenida;
    document.querySelector('.title__subsection').textContent = translations[language].saludo.descripcion;
    document.querySelectorAll('.title__subsection')[1].textContent = translations[language].saludo.proyecto;
    document.querySelector('.title__explora').textContent = translations[language].saludo.explora;

    // Actualizar menú
    document.querySelector('.menu__list__item:nth-child(2) a').textContent = translations[language].menu.sobreMi;
    document.querySelector('.menu__list__item:nth-child(3) a').textContent = translations[language].menu.skills;
    document.querySelector('.menu__list__item:nth-child(4) a').textContent = translations[language].menu.hobbies;
    document.querySelector('.menu__list__item:nth-child(5) a').textContent = translations[language].menu.formacion;
    document.querySelector('.menu__list__item:nth-child(6) a').textContent = translations[language].menu.proyectos;
    document.querySelector('.menu__list__item:nth-child(7) a').textContent = translations[language].menu.contacto;

    // Actualizar Modo Noche
    document.querySelector('#modo-texto').textContent = translations[language].modo.noche;
     // Actualizar sección Sobre Mi
     document.querySelector('.about__title').textContent = translations[language].sobreMi.titulo;
     document.querySelector('.sobre__Laura').textContent = translations[language].sobreMi.quien;
     document.querySelectorAll('.about__paragraph')[0].textContent = translations[language].sobreMi.descripcion1;
     document.querySelectorAll('.about__paragraph')[1].textContent = translations[language].sobreMi.descripcion2;
     document.querySelectorAll('.about__paragraph')[2].textContent = translations[language].sobreMi.descripcion3;
// Actualizar sección Hobbies
document.querySelector('.hobbies__title').textContent = translations[language].hobbies.titulo;
document.querySelectorAll('.hobbies__name').forEach((el, index) => {
    el.textContent = translations[language].hobbies.lista[index];
});

// Actualizar sección Formación académica
document.querySelector('.formacion-academica h2').textContent = translations[language].formacion.titulo;
const estudios = translations[language].formacion.estudios;
document.querySelectorAll('.formacion__box .cards').forEach((card, index) => {
    const titulo = estudios[index].titulo;
    const institucion = estudios[index].institucion;
    const fecha = estudios[index].fecha;

    const textos = card.querySelectorAll('.details__academic p, .details__academic h3');
    textos[0].textContent = titulo;
    textos[1].textContent = institucion;
    textos[2].textContent = fecha;

    const link = card.querySelector('.certificar');
    if (link) link.textContent = translations[language].formacion.verCertificado;
});
  // Actualizar sección de Proyectos
  //Actualizar titulo
  document.querySelector(".experience__section__title").textContent = translations[language].tituloProyectos;
//Actualizar resto de sección
  const proyectos = document.querySelectorAll('.experience__lista');
  proyectos.forEach((project) => {
      const projectKey = project.dataset.project;
      const projectData = translations[language].proyectos[projectKey];
  
      if (projectData) {
          project.querySelector('.experience__project-title').textContent = projectData.titulo;
          project.querySelector('.descripcion').textContent = projectData.descripcion;
          project.querySelector('.experience__botao--demo').textContent = projectData.demo;
          project.querySelector('.experiencia__botao--repo').textContent = projectData.repo;
      }
  });
  //Actualizar contacto
document.querySelector('.contacto__title').textContent = translations[language].contacto.tituloContacto;
document.querySelector('.contacto_subtitulo').textContent = translations[language].contacto.subtitulo;
//document.getElementById('contacto_internet').textContent = translations[language].contacto.internet;
document.getElementById('contacto_internet').childNodes[0].textContent = translations[language].contacto.internet;

document.querySelector('.formulario_titulo').textContent = translations[language].formulario.tituloFormulario;
document.querySelector('.label_nombre').textContent = translations[language].formulario.nombre;
document.querySelector('.label_email').textContent = translations[language].formulario.correo;
document.querySelector('.label_mensaje').textContent = translations[language].formulario.mensaje;
document.querySelector('.boton_enviar').textContent = translations[language].formulario.enviar;
document.getElementById('name').placeholder = translations[language].formulario.placeholderNombre;
document.getElementById('email').placeholder = translations[language].formulario.placeholderCorreo;
document.getElementById('message').placeholder = translations[language].formulario.placeholderMensaje;

// Actualizar menú footer
document.querySelector('.menu__list__item-footer:nth-child(1) a').textContent = translations[language].menu.sobreMi;
document.querySelector('.menu__list__item-footer:nth-child(2) a').textContent = translations[language].menu.skills;
document.querySelector('.menu__list__item-footer:nth-child(3) a').textContent = translations[language].menu.hobbies;
document.querySelector('.menu__list__item-footer:nth-child(4) a').textContent = translations[language].menu.formacion;
document.querySelector('.menu__list__item-footer:nth-child(5) a').textContent = translations[language].menu.proyectos;
document.querySelector('.menu__list__item-footer:nth-child(6) a').textContent = translations[language].menu.contacto;

//Actualizar derechos
document.querySelector('.derechos').innerHTML = `${translations[language].derechos.creditos} &copy; 2022-2025 Laura Cañon`;

// Change the language for the select dropdowns
languageSelectDesktop.value = language;
languageSelectMobile.value = language;
}


// Evento para el selector de idioma
languageSelectDesktop.addEventListener('change', () => {
    changeLanguage(languageSelectDesktop.value);
});
languageSelectMobile.addEventListener('change', () => {
    changeLanguage(languageSelectMobile.value);
});

// Cambiar idioma por defecto al cargar la página
changeLanguage('es');


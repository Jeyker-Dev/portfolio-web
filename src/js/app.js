document.addEventListener('DOMContentLoaded', function() 
{
    // Código a ejecutar cuando el DOM esté completamente cargado
    startApp();
});

function startApp() 
{
    // Código para iniciar la aplicación
    console.log('Aplicación iniciada');
    // scrollReveal();
}

function scrollReveal()
{
    var sr = ScrollReveal();

    // Reveal de los soft skills
    sr.reveal('.skill-primary-reveal', { delay: 1400, origin: 'left' });
    sr.reveal('.skill-secondary-reveal', { delay: 1400, origin: 'right' });
    sr.reveal('.skill-third-reveal', { delay: 1400, origin: 'bottom' });
}
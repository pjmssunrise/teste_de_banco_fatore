// função do botão de navegação

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});


// carrossel ____________________________________

    const carrossel = document.querySelector('.carrossel_modeulos_rapidos');
    let isDown = false;
    let startX;
    let scrollLeft;

    carrossel.addEventListener('mousedown', (e) => {
        isDown = true;
        carrossel.classList.add('active');
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    carrossel.addEventListener('mouseleave', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    carrossel.addEventListener('mouseup', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    carrossel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 1;
        carrossel.scrollLeft = scrollLeft - walk;
    });


// __________________________________________


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const menuButton = document.querySelector('.menu-button');
    const menuMobile = document.getElementById('menu-mobile');
    const navItems = document.querySelectorAll('.nav__item a');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            if (menuMobile.classList.contains('menu-visible')) {
                menuMobile.classList.add('cerrarMenu');
                menuMobile.addEventListener('animationend', () => {
                    menuMobile.classList.remove('menu-visible', 'cerrarMenu');
                    menuMobile.classList.add('displaynone');
                }, { once: true });
            }

            const targetSectionId = item.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);
            const scrollOffset = navbar.clientHeight;
            window.scrollTo({
                top: targetSection.offsetTop - scrollOffset,
                behavior: 'smooth'
            });
        });
    });
    function checkScroll() {
        const scrollY = window.scrollY;

        if (scrollY >= 10 && !navbar.classList.contains('navbar-visible')) {
            navbar.classList.remove('displaynone');
            navbar.classList.add('navbar-visible');
        } else if (scrollY < 10 && navbar.classList.contains('navbar-visible')) {
            navbar.classList.add('cerrarMenu');
            navbar.addEventListener('animationend', () => {
                navbar.classList.remove('navbar-visible', 'cerrarMenu');
                navbar.classList.add('displaynone');
            }, { once: true });

        }
    }

    window.addEventListener('scroll', checkScroll);

    checkScroll();

    var fecha = new Date();
    copy.innerHTML = '©' + fecha.getFullYear();

    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (menuMobile.classList.contains('menu-visible')) {
            menuMobile.classList.add('cerrarMenu');
            menuMobile.addEventListener('animationend', () => {
                menuMobile.classList.remove('menu-visible', 'cerrarMenu');
                menuMobile.classList.add('displaynone');
            }, { once: true });
        } else {
            menuMobile.classList.remove('displaynone');
            menuMobile.classList.add('menu-visible');
        }
    });
});

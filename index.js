window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled')
    }
})
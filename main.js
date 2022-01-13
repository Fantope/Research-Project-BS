document.querySelector('.nav-menu-right').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.Principal', {delay:100});
ScrollReveal().reveal('.Extra', {delay: 250});

const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navIcon');
const hamburger = document.querySelector('#hamburger');

navToggle.addEventListener("click", function() {
    nav.classList.toggle('open')
    navIcon.forEach(function(icon) {
        icon.classList.toggle('hidden');
    })
})
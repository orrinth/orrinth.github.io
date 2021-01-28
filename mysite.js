const burger   = document.querySelector('.fa-bars');
const navLinks = document.querySelector('nav');
const exitNav  = document.querySelector('.fa-times');

function showmenu() {
    navLinks.style.transform = 'translate(0%)';
}

function hidemenu() {
    navLinks.style.transform = 'translate(100%)';
}

burger.addEventListener('click', showmenu);
exitNav.addEventListener('click', hidemenu);
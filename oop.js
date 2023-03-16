const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navber__menu');
const sign = document.querySelector(".button")
const logo = document.querySelector(".cont_logo")

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

sign.onclick = function () {
    logo.classList.toggle("hidden")
};

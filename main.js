let hamburger = document.querySelector('.header-right a i');
console.log(hamburger);

let menu = document.querySelector('.hamburger-menu');
console.log(menu);

let x = document.querySelector('.hamburger-menu a i');
console.log(x);

hamburger.addEventListener('click', function() {
    menu.classList.add('active')
});
x.addEventListener('click', function() {
    menu.classList.remove('active')
});

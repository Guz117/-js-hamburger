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


menu.style.backgroundImage = "url('https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/681/original/Pittogramma-RGB-1080-BLUE-circle.png')";
menu.style.backgroundSize = "cover";

let ulMenu = document.querySelector('.list');
let liMenu = document.createElement("li");
liMenu.append('Camp gratuito');
ulMenu.append(liMenu);

let ulHamburger = document.querySelector('.list-hamburger');
let liHamburger = document.createElement("li");
liHamburger.append('Camp gratuito');
ulHamburger.append(liHamburger);

liHamburger.style.color = 'white';
liHamburger.style.fontSize = '25px';
liHamburger.style.borderBottom = '2px solid white';
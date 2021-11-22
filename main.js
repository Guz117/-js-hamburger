let hamburgerMenuAddRemove= document.getElementsByClassName('hamburger-menu');

let menu = document.querySelector('.hamburger-menu');

hamburgerMenuAddRemove.addEventListener('click', function () {
    let classHamburger = menu.className;
    console.log(classHamburger);
  
    if (classHamburger == ".hamburger-menu") {
        hamburgerMenu.classList.remove('.hamburger-menu');
    } else {
      hamburgerMenu.classList.add('.hamburger-menu');
    }
  });
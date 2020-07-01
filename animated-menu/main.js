const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
    } else {
        menu.classList.remove('open');
        menuOpen = false;
    }
});
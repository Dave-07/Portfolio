const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item')

let elements = [hamburger, nav, menuNav, ...navItems];

let showMenu = false;

// const toggleMenu = () => 
//     !showMenu && (elements.forEach(el => el.classList.add('open')), showMenu = true) || (elements.forEach(el => el.classList.remove('open')), showMenu = false); 

const toggleMenu = () => {
    if (!showMenu) {
        elements.forEach(el => el.classList.add('open'));
        showMenu = true;
    } else {
        elements.forEach(el => el.classList.remove('open'));
        showMenu = false;
    }
};

menuBtn.addEventListener('click', toggleMenu);



let lastScrollTop = 0;
const navbar = document.querySelector('.nav');

/*functino detects scrolling and hides nav by 
adding hidden class. If page is scrolled 
to the very top then menu appears again*/
window.addEventListener('scroll', function() {
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden'); 
    } else {
        navbar.classList.remove('hidden'); 
    }
});


/* Navigation height change on scrolling */
let nav = document.getElementsByClassName('nav')[0];
window.onscroll = (e) => {
    console.log(window.scrollY);
    if(window.scrollY >= 100){
        nav.classList.add('nav-small');
    }else{
        nav.classList.remove('nav-small');
    }
}

/* mobile menu show / hide on clicks */
let showButton = document.getElementById('menu-open-button');
let hideButton = document.getElementById('menu-close-button');
let mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClass = "mobile-nav-show";

showButton.addEventListener('click', (e) => {
    mobileMenu.classList.add(mobileMenuClass);
});

hideButton.addEventListener('click', (e) => {
    mobileMenu.classList.remove(mobileMenuClass);
});

/*function sideNav(){
    let sideNav = document.getElementsByClassName('side-nav')[0];
    let body = document.getElementsByTagName('body')[0];
    document.getElementById("menu-open-button").addEventListener('click', (e) => {
        sideNav.classList.add('show');
        body.style.overflow = 'hidden';
    });
    
    document.getElementById('close-nav-button').addEventListener('click', (e) =>{
        sideNav.classList.remove('show');
        body.style.overflow = 'auto';
    });
}

sideNav();*/
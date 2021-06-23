// show menu
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

// menu show 
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
//close menu
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}
//remove menu mobile

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) => {
    n.addEventListener("click", linkAction);
})

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
//change backgrond header

function scrollHeader() {
    const header = document.getElementById("header");
    if(this.scrollY >= 200) {
        header.classList.add("scroll-header");
    }
    else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

// swiper 

let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});
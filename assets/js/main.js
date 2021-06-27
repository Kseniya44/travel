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

// video

const videoFile = document.getElementById("video-file"),
    videoButton = document.getElementById("video-button"),
    videoIcon = document.getElementById("video-icon");

videoButton.addEventListener("click", playPause);
videoFile.addEventListener("ended", finalVideo);

function playPause() {
    if(videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
    }else {
        videoFile.pause();
        videoIcon.classList.remove("ri-pause-line");
        videoIcon.classList.add("ri-play-line");
    }
}

function finalVideo() {
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
}

// show scroll up 
window.addEventListener("scroll", scrollUp);

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    if(this.scrollY >= 200) {
        scrollUp.classList.add("show-scroll");
    }else {
        scrollUp.classList.remove("show-scroll");
    }
}

// scroll reveal animaiton

const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
})

sr.reveal(`.home__data, .home__link, 
            .home__info, .discover__container, 
            .experience__data,
            .experience__overlay, .place__card,
            .sponsor__content, .footer__data, .footer__rights`, {
    origin: "top",
    interval: 100,
    reset: true
})

sr.reveal(".about__data, .video__description, .subscribe__description", {
    origin: "left",
})

sr.reveal(".about__imgs, .video__container, .subscribe__form", {
    origin: "right",
    interval: 100,
})
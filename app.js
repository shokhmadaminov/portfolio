const darkBtn = document.querySelector(".dark-btn")
const lightBtn = document.querySelector(".light-btn")
const burgerBtn = document.querySelector(".burger-btn")
const closeBtn = document.querySelector(".left-nav__close")
const leftNav = document.querySelector(".left-nav")
const socialMedia = document.querySelector(".footer__social-media")
const body = document.querySelector("body")


darkBtn.addEventListener("click", ()=> {
    body.classList.add("dark-bg")
    darkBtn.classList.add("hidden")
    lightBtn.classList.remove("hidden")
    burgerBtn.style.filter = "invert(1)"
    closeBtn.style.filter = "invert(1)"
    socialMedia.style.filter = "invert(1)"
})

lightBtn.addEventListener("click", ()=> {
    body.classList.remove("dark-bg")
    darkBtn.classList.remove("hidden")
    lightBtn.classList.add("hidden")
    burgerBtn.style.filter = "invert(0)"
    closeBtn.style.filter = "invert(0)"
    socialMedia.style.filter = "invert(0)"
})

burgerBtn.addEventListener("click", function() {
    leftNav.style.transform = "translate(0%)"
    leftNav.style.transition = "all 0.5s"
})

closeBtn.addEventListener("click", function() {
    leftNav.style.transform = "translate(-100%)"
    leftNav.style.transition = "all 0.5s"
})

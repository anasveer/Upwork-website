const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

/*navLinksLi.forEach(li => li.addEventListener('click',() => {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
})) */


// type js
var typed = new Typed('#hero-title',{
    strings: ['Creative Agency.', 'Typed JS is Cool.'],
    typeSpeed: 50,
    loop: Infinity,
    typeSpeed: 15,
    backDelay: 2000,
    
});

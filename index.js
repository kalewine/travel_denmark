// Header Observer
const positioner = document.querySelector(".positioner");

const header = document.querySelector('header');
const logoContainer = document.querySelector('.logo-container');
const logoText = document.querySelector('.logo-text');
const logoImg = document.querySelector('.denmark-flag-map');
const navList = document.querySelector('.nav__list')
const navListItem = document.querySelectorAll('.nav__list-item');


const toChange = [header, logoContainer, logoText, logoImg, navList]

const scrolledOptions = {
    threshold: 1
}

const scrolledAfterLoad = new IntersectionObserver ((entries, scrolledAfterLoad) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            // header.classList.add("scrolled")
            toChange.forEach(element=> {
                element.classList.add('scrolled')
            })
            navListItem.forEach(item => {
                item.classList.add('scrolled')
            })
        }else if (entry.isIntersecting){
            toChange.forEach(element=> {
                element.classList.remove('scrolled')
            })
            navListItem.forEach(item => {
                item.classList.remove('scrolled')
                })
            
        }
        
    })
}, scrolledOptions)

scrolledAfterLoad.observe(positioner)
// About Observer
const fadeIn = document.querySelector('.fade-in');
const appearOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver ((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }else if (entry.isIntersecting){
            entry.target.classList.add('appear')
           
        }
        appearOnScroll.unobserve(entry.target);
    })
}, appearOptions);

appearOnScroll.observe(fadeIn);

// Destinations Observer
const destinations = document.querySelectorAll('.destinations__row');

const slideInOptions = {
    rootMargin: "100px 0px 0px 0px"
};

const slideInObserver = new IntersectionObserver((entries, slideInObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }else if (entry.isIntersecting){
            entry.target.children[0].classList.add('appear')
            entry.target.children[1].classList.add('appear')
        }
        slideInObserver.unobserve(entry.target);
    })
}, slideInOptions);

destinations.forEach(destination => {
    slideInObserver.observe(destination)
})

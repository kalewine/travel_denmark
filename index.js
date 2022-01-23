// About section fade in
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

// Destinations slide in
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

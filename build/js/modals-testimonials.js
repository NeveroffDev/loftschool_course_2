const section = document.querySelector('.testimonials');
const overlay = document.querySelector('.testimonials-overlay');
const heading = overlay.querySelector('.testimonials-overlay__heading');
const text = overlay.querySelector('.testimonials-overlay__text');
const box = overlay.querySelector('.testimonials-overlay__box');


section.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.parentNode.className === 'testimonials__button') {
        overlay.style.animation = 'fadeIn .4s ease both';
        box.style.animation = 'bounceScaleIn .4s ease both';
        overlay.style.visibility = 'visible';
        heading.textContent = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;
        text.textContent = e.target.parentNode.previousElementSibling.textContent;
        document.body.style.overflow = 'hidden';

    }
});

function hideOverlay() {
    overlay.style.opacity = '0';
    document.body.style.overflow = 'initial';
    overlay.style.animation = 'fadeOut .4s ease both';
    box.style.animation = 'bounceScaleOut .4s ease both';
    overlay.style.visibility = 'hidden';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideOverlay();
    }

});

overlay.addEventListener('click', (e) => {
    if (e.target.className.includes('close')) {
        hideOverlay();
    }
});


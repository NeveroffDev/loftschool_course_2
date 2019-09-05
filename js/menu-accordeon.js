const menu = document.querySelector('.our-menu');
const items = document.querySelectorAll('.our-menu__item');
const itemsLength = items.length;
menu.addEventListener('click', (e) => {
    e.preventDefault();
    removeActiveClass();
    console.log(e.target);
    if (e.target.classList.contains('our-menu__link'))
        e.target.parentElement.parentElement.classList.add('our-menu__item--active');
});
let removeActiveClass = () => {
    for (let i = 0; i < itemsLength; i++) {
        if (items[i].classList.contains('our-menu__item--active')) {
            items[i].classList.remove('our-menu__item--active');
        }
    }
};
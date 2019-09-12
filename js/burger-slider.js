const leftArrow = document.querySelector('.slider__left');
const rightArrow = document.querySelector('.slider__right');
const list = document.querySelector('.slider__list');
const items = document.querySelectorAll('.slider__item');
const itemsLength = items.length;
let currentRight = 0;


rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
    currentRight++;
    if (currentRight < itemsLength) {
        list.style.right = currentRight * 100 + '%';
        items[currentRight].style.opacity = '1';
        items[currentRight - 1].style.opacity = '0';
    } else {
        list.style.right = 0 + '%';
        currentRight = 0;
        items[0].style.opacity = '1';
        items[itemsLength - 1].style.opacity = '0';
    }
});
leftArrow.addEventListener('click', (e) => {
    e.preventDefault();
    currentRight--;
    if (currentRight >= 0) {
        list.style.right = currentRight * 100 + '%';
        items[currentRight].style.opacity = '1';
        items[currentRight + 1].style.opacity = '0';
    } else {
        list.style.right = (itemsLength - 1) * 100 + '%';
        currentRight = itemsLength - 1;
        items[0].style.opacity = '0';
        items[itemsLength - 1].style.opacity = '1';
    }
});


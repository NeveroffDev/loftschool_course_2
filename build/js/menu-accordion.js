//Call for team section
accordionMenu('team', 'team__item');

//Call for our-menu section
accordionMenu('our-menu', 'our-menu__item');

function accordionMenu(menuClass, itemsClass) {
    const menu = document.querySelector('.' + menuClass);
    const items = document.querySelectorAll('.' + itemsClass);
    const itemsLength = items.length;
    const activeClass = itemsClass + '--active';
    const linkClass = menuClass + '__link';

    menu.addEventListener('click', (e) => {
        e.preventDefault();
        removeActiveClass(items, activeClass);
    });

    for (let i = 0; i < itemsLength; i++) {
        items[i].addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.target.classList.contains(linkClass)) {
                removeActiveClass(items, activeClass, items[i]);
                items[i].classList.toggle(activeClass);
            }

        });
    }
}

function removeActiveClass(items, activeClass, curItem) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains(activeClass) && curItem !== items[i]) {
            items[i].classList.remove(activeClass);
        }
    }
}
(function () {
    let burgerButton = document.getElementById('burger-menu');
    let fullScreenMenu = document.getElementById('full-screen-menu');
    let fullScreenClose = document.getElementById('full-screen-close');

    burgerButton.addEventListener('click', function (e) {
        fullScreenMenu.style.opacity = '1';
        fullScreenMenu.style.left = '0';
        fullScreenMenu.style.right = '0';
        document.body.style.overflow = 'hidden';
    });

    fullScreenClose.addEventListener('click', function (e) {
        fullScreenMenu.style.opacity = '0';
        fullScreenMenu.style.left = '-100%';
        fullScreenMenu.style.right = '100%';
        document.body.style.overflow = 'initial';
    });
})();

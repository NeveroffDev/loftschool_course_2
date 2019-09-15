(function () {

    $(function () {
        let screen = 0;
        let pages = $('.section');
        let inscrol = false;
        const container = $('.main-content');
        const sideItems = $('.side-nav__item');
        const overlayTest = $('.testimonials-overlay');
        const overlayOrder = $('.order-overlay');


        sideItems.on('click', function (e) {
            if (notOverlay()) {
                screen = sideItems.index(this);
                sideItems.removeClass('side-nav__item--active');
                $(this).addClass('side-nav__item--active');
                let position = (-sideItems.index(this) * 100) + '%';
                container.css({
                    'top': position
                });
                isDark(sideItems.index(this));
            }
        });


        $('.page:first-child').addClass('active');

        $('body').on('mousewheel', function (e) {
            if (notOverlay()) {
                let activePage = pages.filter('.active');
                if (!inscrol) {
                    inscrol = true;
                    if (e.deltaY > 0) {
                        if (activePage.prev().length) {
                            screen--;
                        }
                    } else {
                        if (activePage.next().length) {
                            screen++;
                        }
                    }
                    let position = (-screen * 100) + '%';
                    pages.eq(screen).addClass('active').siblings().removeClass('active');
                    isDark(screen);
                    sideItems.eq(screen).addClass('side-nav__item--active').siblings().removeClass('side-nav__item--active');
                    console.log(sideItems.eq(screen));
                    container.css({
                        'top': position
                    });
                    setTimeout(function () {
                        inscrol = false;
                    }, 800);
                }

            }
        });

        function isDark(screen) {
            if (screen === 1 || screen === 7) {
                sideItems.addClass('side-nav__item--dark');
            } else {
                sideItems.removeClass('side-nav__item--dark');
            }
        }

        function notOverlay() {
            return overlayTest.css('visibility') === 'hidden' && overlayOrder.css('visibility') === 'hidden'
        }

    });


})();
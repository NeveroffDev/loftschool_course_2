(function () {

    $(function () {
        let screen = 0;
        let pages = $('.section');
        let inscrol = false;
        const body = $('body');
        const container = $('.main-content');
        const sideItems = $('.side-nav__item');
        const overlayTest = $('.testimonials-overlay');
        const overlayOrder = $('.order-overlay');
        const scrollDownLink = $('.intro-section__scroll-down-link');
        const mapSection = $('.section-map');
        const orderBtn = $('.Btn-order');
        const mainNavItems = $('.main-nav__item');
        const mobileNavItems = $('.fullscreen-menu__item');
        const fullScreenMenu = $('#full-screen-menu');


        //main nav navigation
        mainNavItems.on('click', function (e) {
            e.preventDefault();
            navigationMenu(mainNavItems, this);
        });

        mobileNavItems.on('click', function (e) {
            e.preventDefault();
            navigationMenu(mobileNavItems, this);
            fullScreenMenuClose(fullScreenMenu);
        });

        function navigationMenu(items, el) {
            let index = items.index(el);
            screen = index + 1;
            if ((screen) < items.length && screen !== 6) {
                scrollOnScreen(screen);
            } else {
                scrollOnScreen(screen + 1)
            }
        }

        function fullScreenMenuClose(menu) {
            menu.css({
                'opacity': 0,
                'left': '-100%',
                'right': '100%'
            });
            body.css('overflow', 'initial');
        }


        disableMapSwipe();//disabled map swipe for desktop on initialize

        $(window).resize(function () {//disabled map swipe for desktop on resize window
            disableMapSwipe();
        });

        function disableMapSwipe() {
            if (window.innerWidth > 768) {
                mapSection.addClass('noSwipe');
            } else {
                mapSection.removeClass('noSwipe');
            }
        }


        scrollDownLink.on('click', function (e) {
            e.preventDefault();
            screen++;
            scrollOnScreen(screen);
        });

        sideItems.on('click', function (e) {
            e.preventDefault();
            if (notOverlay()) {
                screen = sideItems.index(this);
                scrollOnScreen(screen);
            }
        });


        $('.page:first-child').addClass('active');

        body.on('wheel', function (e) {
            let condition = e.originalEvent.deltaY < 0;
            scrollEventHandler(condition);
        });

        //for mobile swipe

        pages.swipe({
            swipeDown: function (event, direction, distance, duration, fingerCount, fingerData) {
                scrollEventHandler(true);
            },
            swipeUp: function (event, direction, distance, duration, fingerCount, fingerData) {
                scrollEventHandler(false);
            },
            threshold: 150,
            maxTimeThreshold: 5000,
            fingers: 'all',
            excludedElements: "label, button, input, select, textarea, .noSwipe"
        });


        function scrollEventHandler(cond) {
            if (notOverlay()) {
                let activePage = pages.filter('.active');
                if (!inscrol) {
                    inscrol = true;
                    if (cond) {
                        if (activePage.prev().length) {
                            screen--;
                        }
                    } else {
                        if (activePage.next().length) {
                            screen++;
                        }
                    }
                    pages.eq(screen).addClass('active').siblings().removeClass('active');
                    scrollOnScreen(screen);
                    setTimeout(function () {
                        inscrol = false;
                    }, 800);
                }

            }
        }

        function isDark(screen) {
            if (pages.eq(screen).hasClass('isDark')) {
                sideItems.addClass('side-nav__item--dark');
            } else {
                sideItems.removeClass('side-nav__item--dark');
            }
        }

        function notOverlay() {
            return overlayTest.css('visibility') === 'hidden' && overlayOrder.css('visibility') === 'hidden'
        }


        orderBtn.on('click', function (e) {
            e.preventDefault();
            screen = 6;
            scrollOnScreen(6);
        });

        function scrollOnScreen(screen) {
            let position = (-screen * 100) + 'vh';
            isDark(screen);
            sideItems.eq(screen).addClass('side-nav__item--active').siblings().removeClass('side-nav__item--active');
            container.css({
                'top': position
            });
        }

    });


})();
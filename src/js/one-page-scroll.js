(function () {

    $(function () {
        let screen = 0;
        let pages = $('.section');
        let inscrol = false;
        const body = $('body');
        const sections = $('.section:not(:last-child)');
        const container = $('.main-content');
        const sideItems = $('.side-nav__item');
        const overlayTest = $('.testimonials-overlay');
        const overlayOrder = $('.order-overlay');
        const scrollDownLink = $('.intro-section__scroll-down-link');

        scrollDownLink.on('click', function (e) {
            e.preventDefault();
            screen++;
            let position = (-100) + '%';
            container.css({
                'top': position
            });
            isDark(1);
            sideItems.removeClass('side-nav__item--active');
            sideItems.eq(1).addClass('side-nav__item--active');
        });

        sideItems.on('click', function (e) {
            e.preventDefault();
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

        body.on('wheel', function (e) {
            let condition = e.originalEvent.deltaY < 0;
            scrollEventHandler(condition);
        });

        //for mobile swipe
        sections.swipe( {
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                if(direction === 'down'){
                    scrollEventHandler(true);
                }
                if(direction === 'up'){
                    scrollEventHandler(false);
                }
            },
            threshold: 150,
            maxTimeThreshold: 5000,
            fingers: 'all'
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
                    let position = (-screen * 100) + 'vh';
                    pages.eq(screen).addClass('active').siblings().removeClass('active');
                    isDark(screen);
                    sideItems.eq(screen).addClass('side-nav__item--active').siblings().removeClass('side-nav__item--active');

                    container.css({
                        'top': position
                    });
                    setTimeout(function () {
                        inscrol = false;
                    }, 800);
                }

            }
        }

        function isDark(screen) {
            if (screen === 1 || screen === 7 || screen === 8) {
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
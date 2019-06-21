(function($) {
    "use strict";

    // Menu
    jQuery(document).ready(function() {
        // Open menu action
        $('div#menuToggle').on('click', function() {
            $('div#menuToggle').toggleClass('active');
            $('body').toggleClass('body-push-toright');
            $('nav#theMenu').toggleClass('menu-open');
        });

        // Close menu action
        $('.section,div#menu-options a').on('click', function() {
            $('nav#theMenu').removeClass('menu-open');
            $('.top-bar').removeClass('top-transform');
            $('.middle-bar').removeClass('middle-transform');
            $('.bottom-bar').removeClass('bottom-transform');
        });

        // Smooth Scrolling
        $(function() {
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        });


        // Scroll to top effect
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
                $('div#scrollup').addClass('animated flipInY').fadeIn(200); // Fade in the arrow
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });

        $('div#scrollup').on('click', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // Skills section
        $('div.skillbar').each(function() {
            $(this).find('div.skillbar-bar').css({
                width: $(this).attr('data-percent')
            });
        });
    });

    jQuery(window).load(function() {

        // Fade preloader
        $('div#loading').fadeOut(500);

        // Scroll reveal animation
        window.sr = ScrollReveal({
            reset: false
        }); // reset false stops repetition of animation
        var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot, .timeline-content,#add-more,#skills-card,#testimonials-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients';
        // Customizing a reveal set
        sr.reveal(commonCards, {
            duration: 1100
        });
        sr.reveal('#about-card,.map-label', {
            duration: 1400,
            delay: 500
        });
        sr.reveal('#v-card-holder', {
            duration: 1400,
            distance: '150px'
        });
        sr.reveal('.skillbar-bar', {
            duration: 1800,
            delay: 300,
            distance: '0'
        });
    });
})(jQuery);
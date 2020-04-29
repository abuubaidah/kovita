(function ($) {
    'use strict';
    //==========preloder===========
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });
    //==========fixed header & scroll to top button===========
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300) {
            $('.header').addClass('animated fadeInDown fixed-header');
            if ($(window).width() < 992) {
                $('.header').removeClass('animated fadeInDown fixed-header');
            }
        } else {
            $('.header').removeClass('animated fadeInDown fixed-header');
        }
    });
    $(document).ready(function(){
        //==========dashboard counter===========
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
        //==========symptoms slider===========
        $('.symptom-box').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });
    });
}(jQuery));
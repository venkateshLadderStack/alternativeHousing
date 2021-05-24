(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {







        //  offcanvas-menu

        //    click-action
        $(".bar").on("click", function () {
            $(".offcanva, .overlay").addClass("active");
            return false;
        });

        $(".cross").on("click", function () {
            $(".offcanva, .overlay").removeClass("active");
        });

        $(".overlay").on("click", function () {
            $(".offcanva, .overlay").removeClass("active");
        });


        
        $('.hero-img').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            infinite: true,
            speed: 500,
            arrows: false,
            fade: true,
            cssEase: 'linear'
          });



          $(window).scroll(function(){ 
            var scroll = $(window).scrollTop(),
            speed1 = 20,
            speed2 = 2,
            textPos = $('#abut').position().top,
            bgPos = $('#abut').position().top,
            bgEq = (bgPos - (bgPos + (scroll/speed1))),
            textEq = (textPos - (textPos + (scroll/speed2)));
             $("#abut").css({transform: "translate( 0, " + textEq + "px)"})
             $(".bgSlow").css({transform: "translate( 0, " + bgEq + "px)"})
          
        
        })







    });


    jQuery(window).load(function () {


    });


}(jQuery));
$(document).ready(function () {

    $(window).scroll(function () {
        var viewportHeight = $(this).innerHeight();
        if ($(this).scrollTop() > viewportHeight / 6) {
            $(".logo-appear").css("z-index", "1");
            $(".logo-disappear").css("z-index", "-1");
            $(".logo-disappear").css("opacity", "0");
            $(".logo-appear").css("opacity", "1");
        }

        if ($(this).scrollTop() == 0) {
            $(".logo-appear").css("z-index", "-1");
            $(".logo-disappear").css("z-index", "1");
            $(".logo-disappear").css("opacity", "1");
            $(".logo-appear").css("opacity", "0");
        }
        
        if ($(this).scrollTop() > viewportHeight) {
            $(".logo-appear").css("z-index", "-1");
        }
        
        if ($(this).scrollTop() > 2*viewportHeight) {
            $(".logo-appear").css("display", "none");
            $(".logo-disappear").css("display", "none");
        }
        
        if ($(this).scrollTop() < 2*viewportHeight) {
            if ($(this).innerWidth() > 768) {
                $(".logo-appear").css("display", "block");
                $(".logo-disappear").css("display", "block");
            }
        }
        
        if ($(this).scrollTop() > (2*viewportHeight-40)) {
            $(".navigation").css("background", "rgba(60, 60, 60, .95)");
        }
        
        if ($(this).scrollTop() < (2*viewportHeight-40)) {
            $(".navigation").css("background", "rgba(60, 60, 60, .2)");
        }
        
    });
    
    $(".menu-button").on("click", function() {
        $(".menu ul").toggle(0, "hidden");
    });
    
    
    
    /* Плавные переходы по якорям*/
    $('a[href*="#"]').bind("click", function(e){    
        var anchor = $(this);
        $('html, body').stop().animate({    
            scrollTop: $(anchor.attr('href')).offset().top - 80
        }, 1000);    
        e.preventDefault();    
    });
})

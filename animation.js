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
//            $(".logo-appear").css("opacity", "0");
        }
 
    });
})

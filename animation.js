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
            $(".up").css("display", "none");
        }

        if ($(this).scrollTop() > viewportHeight) {
            $(".logo-appear").css("z-index", "-1");
        }

        if ($(this).scrollTop() > 2 * viewportHeight) {
            $(".logo-appear").css("display", "none");
            $(".logo-disappear").css("display", "none");
        }

        if ($(this).scrollTop() < 2 * viewportHeight) {
            if ($(this).innerWidth() > 1024) {
                $(".logo-appear").css("display", "block");
                $(".logo-disappear").css("display", "block");
            }
            $(".up").css("display", "none");
            $(".up").css("z-index", "-1");
        }

        if ($(this).scrollTop() > (2 * viewportHeight - 40)) {
            $(".navigation").css("background", "rgba(60, 60, 60, .95)");
            $(".navigation").css("display", "none");
            if ($(this).innerWidth() > 1024) {
                $(".up").css("display", "block");
                $(".up").css("z-index", "100");
            }
        }

        if ($(this).scrollTop() < (2 * viewportHeight - 40)) {
            if ($(this).innerWidth() > 1024) {
                $(".navigation").css("background", "rgba(60, 60, 60, .2)");
                $(".navigation").css("display", "block");
            }
        }

    });

    $(".menu-button").on("click", function () {
        $(".menu ul").toggle(0, "hidden");
    });

    $(".tab").on("click", function () {
        $(this).css("background", "rgba(82, 90, 136, 1)");
        $(this).siblings().css("background", "rgba(70, 70, 70, .4)");
    })

    $(".tab-participant").on("click", function () {
        $(".content-participant").css("display", "block");
        $(".content-delegate").css("display", "none");
        $(".content-guest").css("display", "none");

        $(".registration").css("height", "3700px");
        $(this).css("background", "rgb(82, 90, 136);");
    });

    $(".tab-delegate").on("click", function () {
        $(".content-delegate").css("display", "block");
        $(".content-participant").css("display", "none");
        $(".content-guest").css("display", "none");

        $(".registration").css("height", "3700px");
        $(this).css("background", "rgb(82, 90, 136);");
    });

    $(".tab-guest").on("click", function () {
        $(".content-guest").css("display", "block");
        $(".content-participant").css("display", "none");
        $(".content-delegate").css("display", "none");

        $(".registration").css("height", "3700px");
        $(this).css("background", "rgb(82, 90, 136);");
    });


    /* Плавные переходы по якорям*/
    $('a[href*="#"]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 80
        }, 1000);
        e.preventDefault();
    });
})

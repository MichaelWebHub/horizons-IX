$(document).ready(function () {
    
    $(window).on("scroll", function() {
        var viewportHeight = $(this).innerHeight();
        
        if ($(this).scrollTop() > 1.3*viewportHeight) {
            $("#tech-sess_block .desktop-h1").css("opacity", "1");
            textilation("#tech-sess_block");
        }
        
        if ($(this).scrollTop() > 2.3*viewportHeight) {
            $("#plenary_block .desktop-h1").css("opacity", "1");
            textilation("#plenary_block");
        }
        
        if ($(this).scrollTop() > 3.3*viewportHeight) {
            $("#round-table_block .desktop-h1").css("opacity", "1");
            textilation("#round-table_block");
        }
        
        if ($(this).scrollTop() > 4.3*viewportHeight) {
            $("#oilrush_block .desktop-h1").css("opacity", "1");
            textilation("#oilrush_block");
        }
        
        if ($(this).scrollTop() > 5.3*viewportHeight) {
            $("#petroolymic_block .desktop-h1").css("opacity", "1");
            textilation("#petroolymic_block");
        }
        
        if ($(this).scrollTop() > 6.3*viewportHeight) {
            $("#culture_block .desktop-h1").css("opacity", "1");
            textilation("#culture_block");
        }

        if ($(this).scrollTop() > 7.3*viewportHeight) {
            $("#tech_block .desktop-h1").css("opacity", "1");
            textilation("#tech_block");
        }

        
        if ($(this).scrollTop() > 8.3*viewportHeight) {
            $("#energy4me_block .desktop-h1").css("opacity", "1");
            textilation("#energy4me_block");
        }


    })
})


function textilation(block) {
    $(block+' .tlt1').textillate({ in: {
            effect: "fadeInUpBig",
            delayScale: 1,
            delay: 120,
            sync: false,
            shuffle: true,
            reverse: false
        }
    });

    $(block+' .tlt2').textillate({ in: {
            effect: "fadeInLeftBig",
            delayScale: 1,
            delay: 120,
            sync: false,
            shuffle: true,
            reverse: false
        },
        callback: function () {
            
        }
    });

    $(block+' .tlt3').textillate({ in: {
            effect: "fadeInDownBig",
            delayScale: 1,
            delay: 120,
            sync: false,
            shuffle: true,
            reverse: false
        }
    });

    $(block+' .tlt4').textillate({ in: {
            effect: "fadeInRightBig",
            delayScale: .1,
            delay: 10,
            sync: false,
            shuffle: true,
            reverse: false
        },

    });
}

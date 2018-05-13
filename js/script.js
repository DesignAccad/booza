    $(document).ready(function() {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 25) {
                $('#nav').fadeIn(700);
            } else {
                $('#nav').fadeOut(700);
            }
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 25) {
                $('#navlogo').fadeIn(700);
            } else {
                $('#navlogo').fadeOut(700);
            }
        });

        $(window).scroll(function () {

            var scroll = $(window).scrollTop();
            if (scroll < 700) {
                $(".bar2").css("background-color", "#c2f2d0");
                $("#nav").css("background-color", "#fdf5c9");
            }

            else if (scroll < 2645) {
                $(".bar2").css("background-color", "#fdf5c9");
                $("#nav").css("background-color", "#c2f2d0");
            }
            else {
                $(".bar2").css("background-color", "#fdf5c9");
                $("#nav").css("background-color", "#ffcb85");
            }


        })


        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1500, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });


});

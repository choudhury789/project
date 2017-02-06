$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        
        var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                // x[i].style.display = "none";
                $(".mySlides").addClass('hideit');
                $(".mySlides").removeClass('showit');
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1
            }
            // x[myIndex - 1].style.display = "block";
            x[myIndex - 1].className += ' showit';
            // $(".mySlides")[myIndex - 1].addClass('showit');
            // $(".mySlides")[myIndex - 1].removeClass('hideit');
            setTimeout(carousel, 4500);
        }
	});
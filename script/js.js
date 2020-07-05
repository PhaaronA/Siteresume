// "use strict"
$(function () {
    $(".reviews-content-slick").slick({
        dots: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".btn_up").fadeIn();
        } else {
            $(".btn_up").fadeOut();
        }
    });
    $(".btn_up").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 700);
    });
});

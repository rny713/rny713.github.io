$(function () {

    new WOW().init();

    $('nav a,#scrollTopBtn').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    //window 在捲動的時候
    $(window).scroll(function () {
        //以上條件發生時所作的處理
        //把 () 的內容印到 console 裡面
        //$(window).scrolltop() 這行是說現在滾輪在哪裡

        var $scrollPosition = $(window).scrollTop();

        console.log($scrollPosition);

        // Go back button 出現的判斷式
        if ($scrollPosition > 500) {
            // 方法一 $('#scrollTopBtn').addClass('scroll');
            $('#scrollTopBtn').fadeIn();
        } else {
            // 方法一 $('#scrollTopBtn').removeClass('scroll');
            $('#scrollTopBtn').fadeOut();
        }

        if ($scrollPosition > 20) {
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }


    });


});

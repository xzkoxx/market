
$(function(){

    var scrTop, winHei, img, bg;
    /* scrTop 스크롤의 양 */

    var color ;
    winHei = $(window).height()
    img = $('.to2 img').offset().top;

    $(window).on('scroll',function() {

        scrTop = $(this).scrollTop();
       
        /* 이거 보이면 배경 바꿔야지 */


        if( img - winHei < scrTop ) {
            /* $('.bg_g').animate({opacity:0}) */

            $('.bg_g').css({
                background: 'rgba(126, 193, 61, 0.2)'
            });
        }






    })//scroll



})//end
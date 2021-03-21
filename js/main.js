
$(function(){

<<<<<<< HEAD
    var scrTop=0, scrDown=0, winHei, img, bg;
    /* scrTop 스크롤의 양 */

    var alpa=0;
    winHei = $(window).height()
    img = $('.to2 img').offset().top;



=======
    var scrTop, winHei, img, bg;
    /* scrTop 스크롤의 양 */

    var color ;
    winHei = $(window).height()
    img = $('.to2 img').offset().top;

>>>>>>> 4a9e6d83b2973287e98c89c9da6e1034e276317b
    $(window).on('scroll',function() {

        scrTop = $(this).scrollTop();
       
        /* 이거 보이면 배경 바꿔야지 */
<<<<<<< HEAD
        if(scrTop > scrDown){
            if(alpa<=0.2) alpa+=0.0005;
        }else{
            if(alpa>=0) alpa-=0.0005;
        }

        $('body').css({
            backgroundColor : `rgba(126, 193, 61,${alpa})`
        })
      
    
        scrDown = scrTop;
=======


        if( img - winHei < scrTop ) {
            /* $('.bg_g').animate({opacity:0}) */

            $('.bg_g').css({
                background: 'rgba(126, 193, 61, 0.2)'
            });
        }
>>>>>>> 4a9e6d83b2973287e98c89c9da6e1034e276317b






    })//scroll



})//end
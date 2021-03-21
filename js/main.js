
$(function(){

    var scrTop=0, scrDown=0, winHei, img, bg;
    /* scrTop 스크롤의 양 */

    var alpa=0;
    winHei = $(window).height()
    img = $('.to2 img').offset().top;



    $(window).on('scroll',function() {

        scrTop = $(this).scrollTop();
       
        /* 이거 보이면 배경 바꿔야지 */
        if(scrTop > scrDown){
            if(alpa<=0.2) alpa+=0.0005;
        }else{
            if(alpa>=0) alpa-=0.0005;
        }

        $('body').css({
            backgroundColor : `rgba(126, 193, 61,${alpa})`
        })
      
    
        scrDown = scrTop;






    })//scroll



})//end
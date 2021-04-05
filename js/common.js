// 回最上層 js
$("#goTop").click(function(){
    $("html,body").animate({
        scrollTop:0
    },1000);
});
$("#goTop").fadeOut('fast');
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('#goTop').fadeIn("fast");
    } else {
        $('#goTop').stop().fadeOut("fast");
    }
});


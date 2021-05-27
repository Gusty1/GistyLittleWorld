// 回最上層 js
$("#goTop").click(function(){
    $("html").animate({
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

// 滑鼠特效
new fairyDustCursor({colors: ["#ff0000", "#00ff00", "#0000ff"]});

//背景泡泡特效
bubbly({});


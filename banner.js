
var timer=0;
$(function(){
    move();
    timer=setInterval("move()",3000);
    $(".banner ul li").hover(function(){
        clearInterval(timer);
    },function(){
            timer=setInterval("move()",3000);
        })
})
var i=-1;
function move(){
    i++;
    $('.banner-1-1').css({"top":"100px",opacity:0});
    $('.banner-1-2').css({"top":"400px",opacity:0});
    $('.banner-2-2,.banner-2-3').css({opacity:0});

    $('.banner-2-1').css({opacity:0,"left":"-100px"});
    $('.banner-3-4').css({opacity:0,"bottom":"100px"});
    $('.banner-3-1').css({opacity:0});
    $('.banner-3-2').css({opacity:0});
    $('.banner-3-3').css({opacity:0});
    if(i>=3){
        i=0;
    }
    if(i<3) {
        if (i == 0) {
            $(".banner ul li").eq(i).fadeIn(100).siblings().fadeOut();
            $('.banner-1-1').animate({"top": "174px", opacity: 1}, 450, function () {
                $('.banner-1-2').animate({"top": "400px", opacity: 1}, 450);
            });
        }
        if (i == 1) {
            $(".banner ul li").eq(i).fadeIn(100).siblings().fadeOut();
            $('.banner-2-2').animate({opacity: 1,"left":"260px"}, 300, function () {
                $(".banner-2-3").animate({opacity: 1,"left":"260px"}, 300, function () {
                    $('.banner-2-1').animate({opacity: 1, "left": "260"}, 300)
                })
            })
        }

        if (i == 2) {
            $(".banner ul li").eq(i).fadeIn(100).siblings().fadeOut();
            $('.banner-3-4').animate({opacity: 1, "bottom": "0","left":"450"}, 225, function () {
                $('.banner-3-1').animate({opacity: 1, "margin-left": "-360px"}, 225, function () {
                    $('.banner-3-2').animate({opacity: 1, "margin-left": "-360px"}, 225, function () {
                        $('.banner-3-3').animate({opacity: 1, "margin-left": "-107px"}, 225);
                    })
                })
            })
        }
    }
}

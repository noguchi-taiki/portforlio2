$(function(){
    $('.fas').on('click',()=>{
        $('.fas').css('visibility','hidden')
        $('.xs-gnav').css('display','flex')
        $("body").css("background-color","#a3a3a3")
        $("body").css("opacity","0.9")
    });
    $('.close').on('click',()=>{
        $('.fas').css('visibility','visible')
        $('.xs-gnav').css('display','none')
        $("body").css("background-color","#ffffff")
        $("body").css("opacity","1")
    });
    $('.slid-img').slick({
        autoplay:true,
        autoplaySpeed:1500,
        dots:true,
    });
})
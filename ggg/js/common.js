$(document).ready(function(){
    //menu_over
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //pc버전
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() 
    $(window).resize(function(){
        device_chk() 
    })

    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $(this).addClass('on')
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })
    $('header .gnb .depth1 > li:last-child > li:last-child > a').on('focusout', function(){
        if(device_status == 'pc')
        $('header .gnb .depth1 > li').removeClass('on')
        $('header').removeClass('menu_over')
    })

    //menu_open
    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault();	
            $(this).parent().toggleClass('on')
        }
    });

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})
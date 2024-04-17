$(document).ready(function(){
    $('.header .head_sub ul.depth1 > li').on('mouseover','.header .head_sub ul.depth1 > li', function(){
        $('depth2').slideDown(200);
    });
    $('.header .head_sub ul.depth1 > li').on('mouseover','div', function(){
        if(! $(this).hasClass('.header .head_sub ul.depth1 > li')){
            $('depth2').slideUp(200);
    }});
})
$(document).ready(function(){
    $('.header .head_sub ul.depth1 > li').on('mouseover','.header .head_sub ul.depth1 > li', function(){
        $('depth2').slideDown(200);
    });
    $('.header .head_sub ul.depth1 > li').on('mouseover','div', function(){
        if(! $(this).hasClass('.header .head_sub ul.depth1 > li')){
            $('depth2').slideUp(200);
    }});

	$('.header .gnb .gnb_open').on('click', function(){
        $('.header .gnb').addClass('on')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header .gnb').removeClass('on')
    });

    const cont_swiper = new Swiper('.cont .swiper', {
	slidesPerView: 1, 
	spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
	centeredSlides: true, 
	loop: true,  
	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	});

	$('.footer .f_top .family_site .open').on('click', function(){
        $('.footer .f_top .family_site').addClass('on')
    })
    $('.footer .f_top .family_site .close').on('click', function(){
        $('.footer .f_top .family_site').removeClass('on')
    });
})
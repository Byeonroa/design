$(document).ready(function(){
    $('.header .head_sub ul.depth1 > li').on('mouseover','.header .head_sub ul.depth1 > li', function(){
        $('depth2').slideDown(200);
    });
    $('.header .head_sub ul.depth1 > li').on('mouseover','div', function(){
        if(! $(this).hasClass('.header .head_sub ul.depth1 > li')){
            $('depth2').slideUp(200);
    }});

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
swiper.autoplay.stop();  /* 일시정지 기능 */
swiper.autoplay.start();  /* 재생 기능 */
})
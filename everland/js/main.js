$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { 

	effect: "fade", 

	autoplay: {  
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,  

	pagination: {  
		clickable: true
	},
    });
})
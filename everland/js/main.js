$(document).ready(function(){
    const swiper = new Swiper('.swiper', { 

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
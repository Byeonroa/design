$(document).ready(function(){
    const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */

	effect: "fade", /* fade 효과 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 4000,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
		prevEl: '.swiper-button-prev',  
	},

	});
	swiper.autoplay.stop();  /* 일시정지 기능 */
	swiper.autoplay.start();  /* 재생 기능 */

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
    device_chk() //문서가 로딩되고 1번 실행
    $(window).resize(function(){
        device_chk() //문서가 리사이즈될때마다 1번씩 실행
    })

    $('.s_life .list ul li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('.s_life .list ul li').removeClass('on')
            $('.s_life .list ul li').addClass('off')
            $(this).removeClass('off')
            $(this).addClass('on')
        }
    })
    $('.s_life .list ul').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.s_life .list ul li').removeClass('on')
            $('.s_life .list ul li').removeClass('off')
        }
    })

    var sticky = new Sticky('[data-sticky]');

    $('.ms_life ul li').on('click', function(){
        $('.ms_life ul li').removeClass('on')
        $(this).addClass('on')
    })

}) //$(document).ready
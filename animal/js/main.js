$(document).ready(function(){
    /*html 문서가 로딩된 다음에 실행해*/
    /* 메뉴(.header .depth1 > li) 에 마우스를 오버하면 
    오버한 li(this) 에 sub_over클래스를 추가
    header에는 manu_over 클래스 추가
    옆메뉴 이동시 현재 하위메뉴는 out >모든  li 에 있는 클래스를
    지웠다가 지금 오버한것만 다시 클래스 줌 */

    $('.header .gnb ul.depth1 > li').on('mauseenter focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .gnb').on('mauseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .search').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })

    //swiper를 돌아가게 하는애덜//
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next ',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },

    });
    swiper.autoplay.stop();  /* 일시정지 기능 */
    swiper.autoplay.start();  /* 재생 기능 */
	
})
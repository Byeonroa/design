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
            delay: 1000,
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
    
    /*.visual .ctrl_btn .stop 정지버튼을 클릭하면
    팝업은 정지됨, stop버튼 사라짐> play버튼 나타남
    .visual .ctrl_btn .play 재생버튼 클릭하면
    팝업은 재생되고 ,stop버튼이 나타나고 play버튼 사라짐*/

    $('.visual .ctrl_btn .stop').on('click', function(){
        swiper.autoplay.stop(); /*일시정지가능*/
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
    })
	
    /*
    .lost .list > ul > li 클릭하면 
    li에 active 클래스추가
    이전에 액티브 클래스가 있던 li의 액티브는 삭제
    */
   $('.lost .list > ul > li').on('click', function(){
    $('.lost .list > ul > li').removeClass('active')
    $(this).addClass('active')
   })

   /*입양팝업*/
    const adopt_swiper = new Swiper('.adopt_swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
    loop: true, //마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기
	breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: 'adopt .next',
            prevEl: '.adopt .prev',
        },
    });
    /* adopt_swiper.autoplay.stop();  //일시정지 기능
       adopt_swiper.autoplay.start();  //재생 기능 */

    $('.adopt .ctrl_btn .stop').on('click', function(){
        adopt_swiper.autoplay.stop(); /*일시정지가능*/
        $(this).hide()
        $('.adopt .ctrl_btn .play').show()
    })
    $('.adopt .ctrl_btn .play').on('click', function(){
        adopt_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.adopt .ctrl_btn .stop').show()
    })
	
})
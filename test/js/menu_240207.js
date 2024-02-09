$(document).ready(function(){ //문서가 로딩되면 딱 한번
    /* 메뉴에 마우스를 오버하면 - .header .gnb
    header에 클래스 menu_over를 추가

       메뉴에 마우스를 아웃하면
       --bg를 깔아줘서 header에서 마우스를 아웃했을 때
       header에서 menu_over를 삭제
       
       마우스엔터를 주면 클릭해도 작동됨
       모바일에서 피시버전용으로 만든 코드가 작동
       >피시인지 모바일인지 제이쿼리에서 구분해서 
        피시에서만 작동되도록 제한해야함
        css에서도 브라우저 사이즈로만 모바일/피시를 구분
        제이쿼리도 브라우저 사이즈로만 구분*/

    let window_w = $(window).width() //브라우저의 넓이
    let device_status = 'pc' //pc인지 m인지 현재상태를 저장하는 변수
    function device_chk(){ //함수를 선언
        window_w = $(window).width()
        if(window_w > 460){ //pc 
            device_status = 'pc'
        }else{//640이거나 640보다 작은게 모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }//function

    device_chk() //함수의실행

    $(window).resize(function(){ //브라우저가 리사이즈 될때마다 1번씩
        device_chk()  
    })//$(window).resize

    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){ //pc버전이라면실행 -모바일은x
            console.log('마우스올림')
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    //마지막 1차메뉴의 마지막2차메뉴에서 포커스가 아웃되면 메뉴오버를 해제
    //제일좋은 방식은 메뉴옆에 언어/찾기라던가 다른링크가 있고
    //그 메뉴에 포커스가 됬을때 아웃되는게 제일 좋음
    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_over')
    })

    //1차메뉴를 클릭하면 감싸고 있는 li태그의 sub_open이라는 클래스를 추가
    //같은 메뉴를 한 번 클릭하면 열리고 다시 클릭하면 닫힘 toggle
    //하나의 메뉴를 클릭해서 열고 다른 메뉴를 클릭하면 이전 열려있던 메뉴도 닫힘 <보류
    //지금 클릭한것만 열릴꺼임 pc버전에서는 1차메뉴를 클릭하면 페이지 이동을하고
    //모바일 버전에서는 하위메뉴를 열어줌...기능이 확 다름

    $(".header .gnb ul.dapth1 > li > a").on("click", function(e){
		if(device_status  == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            //클릭한 a 자신을 감싸는 li를선택
            $(this).parent().toggleClass('sub_open')
            //toggle=클래스가 있으면 삭제하고 없으면 추가하는것
        }
	});

    /*열기버튼을 누르면 헤더에 메뉴 오픈이라는 클래스를 주고
      닫기보튼을 누르면 헤더에 메뉴 오픈이라는 클래스를 삭제*/

      $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        //스크롤금지
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
      })
      $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        //스크롤금지 해제
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
      })
}) //$(document).ready
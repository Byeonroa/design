$(document).ready(function(){
    //html문서가 로딩되면 단 한번 실행 
    //스크롤시 헤더 스타일 변경
    let scolling = $(window).scrollTop() //스크롤된 값
    
    function scroll_chk(){//함수의 선언
        scolling = $(window).scrollTop()
        //console.log(scolling)
        if(scolling > 0){ //스크롤된값이 0보다 크다면 -fixed 클래스 추가
            $('.header').addClass('fixed')
        }else{ //스크롤된값이 0이거나 0보다 작으면 -fixed 클래스 삭제
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //함수의 호출

    $(window).scroll(function(){
        //브라우저가 스크롤 될 때마다 한번만 실행
        scroll_chk()
    }) //$(window).scoll

    //pc버전에서 메뉴에 오버하면 헤더의 스타일 변경
    let window_w //브라우저의 넓이
    let device_status //모바일인지 피시인지
    let mobile_size = 640
    function device_chk(){
        window_w = $(window).width()//브라우저의 넓이 저장
        if(window_w > mobile_size){ //pc버전
            device_status = 'pc'
        }else{ //640이하
            device_status = 'mobile'
        }
        console.log(device_status)
    } //function device_chk
    device_chk() //함수호출
    $(window).resize(function(){
        device_chk() //함수호출
    })

    $('.header .gnb').on('mouseenter focisin', function(){
        if(device_status == 'pc'){ //pc일떄만 실행
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    //메뉴 바로 뒤에 로그인버튼에 포커스가 되면 메뉴의 오버 상태를 해제
    $('.header .tnb .login').on('focusoin', function(){
        $('.header').removeClass('menu_over')
    })

    //모바일 메뉴 열기/닫기 
    $('.header .gnb  .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb  .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })

    /*          - sub-open 클래스추가
     1차메뉴 선택- .header .gnb ul.depth1> li> a
     1차 메뉴는 a 를 클릭하면 감싸는  li에 클래스 추가
     a는 href미동값을 값을 가지고 있음. 이게 모바일에서 클릭되면x */
     $(".header .gnb ul.depth1> li> a").on("click", function(e){
		if(device_status == 'mobile'){
            e.preventDefault();	
            $(this).parent().addClass('sub_open')
        }
    }); /* a 태그의 href를 작동 시키지 않음 */

    //탑버튼을 클릭하면 상단으로 자동 스크롤
    $('.footer .top').on('click' ,function(){
        $('html, body').animate({
            scolltop : 0
        }, 500)
    })

}) //$(document).ready
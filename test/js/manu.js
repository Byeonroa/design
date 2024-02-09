$(document).ready(function(){

    let window_w = $(window).width()
    let divice_status = "pc" //pc버전인지 모바일버전인지
    if(window_w >640){ //pc버전
        divice_status = "pc"
    }else{ //모바일
        divice_status = "mobile"
    }
    console.log(divice_status)
    $(window).resize(function(){
        window_w = $(window).width()
        if(window_w >640){ //pc버전
            divice_status = "pc"
        }else{ //모바일
            divice_status = "mobile"
        }
        console.log(divice_status)
    })

	//메뉴(.header .gnb)에 마우스를 오버하면 헤더에 메뉴 
    //오픈이라는 클래스를 추가
    //메뉴(.header .gnb)에 오버해서 생긴 흰배경에서 마우스를
    //아웃하면 헤더에 메뉴 오큰 클래스를 삭제

    $('.header .gnb').on('mouseenter focusin', function(){
        $(".header").addClass("menu_open");	
    }) //탭키로만 메뉴를 이동했을때 메뉴에 접근하면 하위 메뉴를 열어주는것
    $('.header').on('mouseleave', function(){
        $(".header").removeClass("menu_open");
    })
    $('.header .gnb>ul>li:last-child>ul>li:last-child').on('focusout', function(){
        $(".header").removeClass("menu_open");
    })  //마지막 메뉴에서 포커스가 아웃되면 메뉴를 모두 봤다고 판단하고 닫음

    $('.header .gnb .gnb_open').on('click', function(){
        $(".header").addClass("menu_mobile")
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $(".header").removeClass("menu_mobile")
    })

}); //.ready

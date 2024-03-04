/* 파일명 : common.js
   작성자 : ByeonRoa
   수정자 : 
   작성일 : 2021-02-28
   수정일 :
   설  명 : 모든 페이지에서 작동되는 jqeury
            (header, footer에서 작동되는)
*/

/* pc버전 메뉴에 마우스를 올리면 hesder에 menu_over 클래스추기
   이벤트 대상: .header .gnb
               .header .gnb ul.depth1 > li
               .header .gnb ul.depth2 > li > a 

   1차메뉴 li에 마우스를 오버하면 해달 li에 on클래스 추가
   이벤트 대상: .header .gnb ul.depth1 > li
               .header .gnb ul.depth2 > li > a
   이전에 오버해던 li에는 on 클래스삭제
   >이전에 오버했던 대상을찾는것보다.. 모든 li에 on을 삭제하고
    마우스를 ㅇ버한 li에만 클래스추가 */

$(document).ready(function(){

   //브라우저가 스크롤이 되면 header fixed 클래스 추가
   //근데 맨 위로 다시 올라가면 header에  fixed 클래스 삭제
   let scrolling
   function scroll_chk(){
      scrolling = $(window).scrollTop()
      if(scrolling > 0){ //조금이라도 스트롤 함
         $('.header').addClass('fixed')
      }else{// 스크롤 안한경우(맨의)
         $('.header').removeClass('fixed')
      }
   }
   scroll_chk() //문서가 로드됬을 떄 1번
   $(window).scroll(function(){
      scroll_chk() 
   })

   let device_status
   let window_w
   function device_chk(){
      window_w = $(window).width()
      if(window_w > 1024){ //pc
         device_status = 'pc'
      }else{//mobile
         device_status = 'mobile'
      }
      console.log(device_status)
   }
   device_chk() //문서가 로딩되고 1번 실행
   $(window).resize(function(){
      device_chk() //문서가 리사이즈 될떄마다 1번 실행
   })

   $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
      if(device_status == 'pc'){
         $('.header').addClass('menu_over')
         $('.header .gnb ul.depth1 > li').removeClass('on')
         $(this).addClass('.on')
      }     
   })
   $('.header').on('mouseleave', function(){
      if(device_status == 'pc'){
         $('.header').removeClass('menu_over')
         $('.header .gnb ul.depth1 > li').removeClass('on')
      }
   })
   $('.header .tnb .lang ').on('focusin', function(){
      if(device_status == 'pc'){
         $('.header').removeClass('menu_over')
         $('.header .gnb ul.depth1 > li').removeClass('on')
      }
   })

   /* footer에 그룹사바로가기 링크 열기/닫기 
      .footer .family_site .open 을 클릭하면 family_site 에 on클래스 추가
      .footer .family_site .close 를 클릭하면 family_site 에 on클래스 삭제*/
   $('.footer .family_site .open').on('click', function(){
      $('.footer .family_site').addClass('on')
   })
   $('.footer .family_site .close').on('click', function(){
      $('.footer .family_site').removeClass('on')
   })

})                                      

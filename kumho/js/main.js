/* 파일명 : main.js
   작성자 : ByeonRoa
   수정자 : 
   작성일 : 2021-02-28
   수정일 :
   설  명 : 메인페이지에 사용된 jqeury
            (header 뻬고)
*/
$(document).ready(function(){
   const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

      effect: "fade", /* fade 효과 */

      autoplay: {  /* 팝업 자동 실행 */
         delay: 2500,
         disableOnInteraction: true,
      },
   
      loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
      navigation: {  /* 이전, 다음 버튼 */
         nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
         prevEl: '.visual .prev',  
      },

   });
   
   $('.visual .btn_ctrl .stop').on('click', function(){
      $(this).hide()
      $('.visual .btn_ctrl .play').show()
      visual_swiper.autoplay.stop();  /* 일시정지 기능 */
   });
   $('.visual .btn_ctrl .play').on('click', function(){
      $(this).hide()
      $('.visual .btn_ctrl .stop').show()
      visual_swiper.autoplay.start();  /* 재생 기능 */
   });

})
$(function() {
  let tabcont = $('.tabnav .focus .tabtxt').data('cont');
  $(tabcont).show();
  $('.fntab').each(function(){
    $('.tabnav li').mouseenter(function(){
      tabcont = $(this).find('.tabtxt').data('cont');
      $('.tabnav li').removeClass('focus');
      $('.tabcont .tabitem').fadeOut(300);
      $(this).addClass('focus');
      $(tabcont).fadeIn(300);
    })
  })

  setFlowBanner();
  
     // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
     const $counters = $(".scrollon");
    
     // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
     const exposurePercentage = 20; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
     const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)
 
     // 윈도우의 스크롤 이벤트를 모니터링합니다.
     $(window).on('scroll', function() {
         // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
         $counters.each(function() {
             const $el = $(this);
     
             // 요소의 위치 정보를 가져옵니다.
             const rect = $el[0].getBoundingClientRect();
             const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
             const contentHeight = rect.bottom - rect.top; // 요소의 높이
             console.log("rect::", rect);
             console.log("winHeight::", winHeight);
             console.log("contentHeight::", contentHeight);
             // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
             if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                 $el.addClass('active');
             }
             // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
             if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                 $el.removeClass('active');
             }
         });
     }).scroll();

})

function setFlowBanner() {
  const $wrap = $('.animated-title');
  const $list = $('.animated-title .track');
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 92; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct()

  //배너 실행 함수
  function flowBannerAct() {
      //무한 반복을 위해 리스트를 복제 후 배너에 추가
      if (listWidth < wrapWidth) {
          const listCount = Math.ceil(wrapWidth * 2 / listWidth);
          for (let i = 2; i < listCount; i++) {
              $clone = $clone.clone();
              $wrap.append($clone);
          }
      }
      $wrap.find('.track').css({
          'animation': `${listWidth / speed}s linear infinite marquee`
      });
  }
}
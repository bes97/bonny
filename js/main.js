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
     const $counters = $(".scrollon");
     const exposurePercentage = 20; 
     const loop = true;
 
     $(window).on('scroll', function() {
         $counters.each(function() {
             const $el = $(this);
             const rect = $el[0].getBoundingClientRect();
             const winHeight = window.innerHeight; 
             const contentHeight = rect.bottom - rect.top;
             if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                 $el.addClass('active');
             }
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
  const speed = 92; 

  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct()

  function flowBannerAct() {
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
$(function() {
  let tabcont = $('.tabnav .focus .tabtxt').data('cont');
  $(tabcont).show();
  $('.fntab').each(function(){
      $('.tabnav li').on("mouseenter", function(){
      tabcont = $(this).find('.tabtxt').data('cont');
      $('.tabnav li').removeClass('focus');
      $('.tabcont .tabitem').fadeOut(300);
      $(this).addClass('focus');
      $(tabcont).fadeIn(300);
    })
  })

  $('.accropen').each(function(){
    $('.more').on('click',function() {
      let self = $(this);
      self.find('.icon').toggleClass("active");
      $(self.data('target')).toggleClass("active");
    })
  })
  $('.accrclose').each(function(){
    let accr = $(this);
    $('.more').on('click',async function() {
      let self = $(this);
      $(accr).find('.icon').removeClass("active");
      $(accr).find('.imgtxtbox').removeClass("active");
      await sleep(500);
      self.find('.icon').addClass("active");
      $(self.data('target')).addClass("active");
    })
  })
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  setFlowBanner();
     const $counters = $(".scrollon");  //translate
     const exposurePercentage = 20; 
     const loop = true;
 
     $(window).on('scroll', function() {
         $counters.each(function() {   //translate
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
         if ($('.typewrap').hasClass('active')) {
          typingfunc('.typingtxt1','.typingani1');
          typingfunc('.typingtxt2','.typingani2');
          typingfunc('.typingtxt3','.typingani3');
          typingfunc('.typingtxt4','.typingani4');
         } else {
          $('.typing').text('')
         }
        //  $('.typewrap.active').each(function(){
        //   // typingfunc('.typing-txt','.typing');

        // })
     }).scroll();

   

    


     $(".lazy").slick({
      lazyLoad: 'ondemand',
      slideToShow: 1,
      slideToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      swiper: false,
      pauseOnHover : false,
      draggable: false,
      arrows: false,
      dots: true,
    });
    $(".center").slick({
      arrows: false,
      dots: false,
      infinite: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 4,
      slidesToScroll: 3,
      pauseOnHover : false,
    });
})

function typingfunc(typingtxtclass, typingclass) {
  var typingBool = false; 
  var typingIdx=0; 
  // 타이핑될 텍스트를 가져온다 
  //var typingTxt = $(".typing-txt").text(); 
  var typingTxt = $(typingtxtclass).text(); 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

  if(typingBool==false){ 
    // 타이핑이 진행되지 않았다면 
    typingBool=true;     
    var tyInt = setInterval(typing,20); // 반복동작 
  } 
  function typing(){ 
    if(typingIdx<typingTxt.length){ 
      // 타이핑될 텍스트 길이만큼 반복 
      //$(".typing").append(typingTxt[typingIdx]);
      $(typingclass).append(typingTxt[typingIdx]);
      // 한글자씩 이어준다. 
      typingIdx++; 
     } else{ 
       //끝나면 반복종료 
      clearInterval(tyInt); 
     } 
  }  
}
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

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  
  function floatingObject(selector,delay,size){
    gsap.to(selector, random(2,2.5), {
      y: size,
      repeat: 1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0,delay)
    })
  }
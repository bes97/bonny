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
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 3,
      pauseOnHover : false,
      easing: 'linear',
    });

    })
window.addEventListener('DOMContentLoaded', function(){
  if (document.querySelector('.rollerwrap')) {
    let roller = document.querySelector('.roller');
    roller.id = 'roller1';
  
    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('.rollerwrap').appendChild(clone);
  
    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.roller .rollerul').offsetWidth+'px';
  
    roller.classList.add('original');
    clone.classList.add('clone');
  }
});

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
      repeat: 2,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0,delay)
    })
  }
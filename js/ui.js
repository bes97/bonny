$(function() {
  $('.fntab').each(function(){
    let self = $(this);
    let tabcont = self.find('.tabnav .focus .tabtxt').data('cont');
    let last_tabcont = tabcont;
    $(tabcont).addClass("focus")
    self.find('.tabnav > ul > li').on("mouseenter", function(){
      tabcont = $(this).find('.tabtxt').data('cont');
      self.find('.tabnav > ul > li').removeClass('focus');
      $(last_tabcont).removeClass('focus');
      $(this).addClass('focus');
      $(tabcont).addClass('focus');
      last_tabcont = tabcont;
    })

  // $('.tabitem.focus').on("dragend", function(){
  //   let tabitem_id =  $(this).next().addClass('focus');
  //   console.log("tabitem_id::",tabitem_id)
  //   // self.find("")
  // })
    
  })
  if ($('.accropen')) {
    $('.accropen').each(function(){
      const container = $(this),
        info_wrap = container.find("li"),
        tit = info_wrap.find(".acctitwrap");

        info_wrap.each(function(){
          if($(this).hasClass("focus")){
              $(this).find(".imgtxtbox").css("height", $(this).find(".imgtxtbox p").innerHeight())
          }
      })

      $('.more').on('click',function() {
        let self = $(this);
        const this_parent_info = $(this).parents(".list_item");

        if(this_parent_info.hasClass("focus")) {
          this_parent_info.removeClass("focus");
          this_parent_info.find('.icon').removeClass("focus");
          this_parent_info.find(".imgtxtbox").css("height",0)
          // console.log('hasactive::',this_parent_info)
          }  else {
            this_parent_info.addClass("focus");
            this_parent_info.find('.icon').addClass("focus");
            this_parent_info.find(".imgtxtbox").css("height",this_parent_info.find(".imgtxtbox .imgtxtbox_in").innerHeight());
          }
      })
    })
  }
   //내용 토글
   const tour_toggle_event = function(){
    const container = $(".info-container"),
        info_wrap = container.find("li"),
        tit = info_wrap.find(".acctitwrap")

    info_wrap.each(function(){
        if($(this).hasClass("focus")){
            $(this).find(".imgtxtbox").css("height", $(this).find(".imgtxtbox p").innerHeight())
        }
    })
    tit.on("click", function(){   
        const this_parent_info = $(this).parents(".list_item");
       
        if(this_parent_info.hasClass("focus")) {
          this_parent_info.removeClass("focus");
          this_parent_info.find('.icon').removeClass("focus");
          this_parent_info.find(".imgtxtbox").css("height",0)
        }  else {
            container.find(".imgtxtbox").css("height",0);
            container.find(".list_item").removeClass("focus");
            container.find('.icon').removeClass("focus");
            this_parent_info.addClass("focus");
            this_parent_info.find('.icon').addClass("focus");
            this_parent_info.find(".imgtxtbox").css("height",this_parent_info.find(".imgtxtbox .imgtxtbox_in").innerHeight())
        }
    })
  }
  if($(".tour-wrap").length > 0){
      tour_toggle_event()
  }

  setFlowBanner();
  const $counters = $(".scrollon");  //translate
  const exposurePercentage = 20; 
  const loop = true;

  let lastScrollY = 0;
  $(window).on('scroll', function(e) {
    const scrollY = window.scrollY;
    const scrollDown = scrollY > lastScrollY;

    if (scrollDown) {
      $counters.each(function() {   //translate
        const $el = $(this);
        const rect = $el[0].getBoundingClientRect();
        const winHeight = window.innerHeight; 
        const contentHeight = rect.bottom - rect.top;
        if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
          $el.addClass('active');
        }
        // if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
        //     $el.removeClass('active');
        // }
      });
    } else {
      if ( $(document).scrollTop() == 0 ) { 
        $counters.removeClass('active');
        $('section:nth-child(2) .scrollon').addClass('active');
      }
      else $counters.addClass('active');
    }
    lastScrollY = scrollY;
  }) //.scroll();

  $(".lazy").slick({
    lazyLoad: 'ondemand',
    slideToShow: 1,
    slideToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    swiper: false,
    pauseOnHover : false,
    draggable: true,
    touchMove : true, 
    arrows: false,
    dots: true,
  });
  $(".lazyno").slick({
      lazyLoad: 'ondemand',
      slideToShow: 1,
      slideToScroll: 1,
      infinite: true,
      autoplay: false,
      fade: true,
      swiper: false,
      pauseOnHover : false,
      draggable: true,
      touchMove : true, 
      arrows: true,
      dots: true,
      customPaging: function (slider, i) {
        curpage = '<span class="curpage">' + (i + 1) + '</span>';
        total = '<span class="total">' + slider.slideCount + '</span>';
        return curpage + total;
      },
      responsive: [{
          breakpoint: 700,
          settings: {
            autoplay: true,
            autoplaySpeed: 4000,
          }
        },]
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

  //영상 풀사이즈 조절
  const top_vdo_size = function(){
    const vdo_con = $(".vdo").parents('.slick-slide');
    function set_size(){
        if($(window).width() > 700){
            if($(window).width() >= ($(window).height()) * 1.7853){
                vdo_con.addClass("horizon")
                vdo_con.removeClass("vertical")
            }else{
                vdo_con.addClass("vertical")
                vdo_con.removeClass("horizon")
            }
        }
    }
    set_size()
    $(window).on("load resize", function(){
        set_size()
    })
}  
if($(".vdo").length > 0){
    top_vdo_size()
}

   if (window.innerWidth > 560) {
    //패럴랙스
    var wd = $(window);
    $('.paral').each(function(){
      var bg = $(this);
      wd.scroll(function(){
        var yPos = -(wd.scrollTop() /7); 
        var coords = '50%' + yPos + 'px';
        bg.css({backgroundPosition:coords});
      });
    });
  } else {
    if ( $(document).scrollTop() == 0 ) $('section:nth-child(2) .scrollon').addClass('active');
  }
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
/* jQuery */
$(function() {
	
	// Mask form
	$('input[name="phone_user"]').mask('9 (999) 999 - 99 - 99');


  // Bottom up
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $(this).height()) {
      $(".btn-up").addClass("btn-up_active");
    } else {
      $(".btn-up").removeClass("btn-up_active");
    }
  });

  $("body").on("click", ".btn-up", function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  });
  

  // Scroll menu
  $(window).on("scroll", function () {

    if ($(this).scrollTop() > 200) {
      $(".menu").addClass("menu_fixed");
    } else {
      $(".menu").removeClass("menu_fixed");
    }
    
  });

  $(window).on("resize", function() {

    if ($(window).width() > 768) {

      $(".menu").removeClass("menu_hidden");
      
      $(window).on("scroll", function () {

        if ($(this).scrollTop() > 200) {
          $(".menu").addClass("menu_fixed");
        } else {
          $(".menu").removeClass("menu_fixed");
        }
      
      });

    } else {
      $(".toggle-menu").removeClass("toggle-menu_open");
      $(".menu").addClass("menu_hidden");
      $(".menu").removeClass("menu_show");
    }

  });


  // Open & close menu
  $(".toggle-menu").on("click", function () {

    $(this).toggleClass("toggle-menu_open");
    $(this).siblings("header").find(".menu").toggleClass("menu_show");

    return false;
  });

  // Show link for project
  if ($(".project__link").attr('href') != '') {

    $(".project__link").show();
    $(".project__nolink").hide();

  } else {

    $(".project__link").hide();
    $(".project__nolink").show();
    
  }


  if ($("body").hasClass("home")) {

    // Skill animation
    let counter = 0;

    $(window).on("scroll", function() {

      let scroll = $(window).scrollTop() + $(window).height();
      let offset = $(".skill").offset().top + 200;
    
      if (scroll > offset && counter == 0) {
        
        $(".skill__line").each(function (){

          let skill = $(this).children(".skill__count").text();

          $(this).animate({width: skill + "%"}, 1200);

        });
        counter = 1;
      }
    });
    
  }

});

  

let body = document.querySelector('body');

if (body.classList.contains('home')) {

  // Swiper Works
  var swiper_clinic = new Swiper('.swiper-works', {
    speed: 1000,
    spaceBetween: 0,
    loop: true,

    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: { 
        slidesPerView: 1,
        centeredSlides: true,
      }, 
      576: { 
        slidesPerView: 2,
        centeredSlides: false,
      },
      992: { 
        slidesPerView: 3,
        centeredSlides: true,
      }, 
    },
  });

  var tl = gsap.timeline();
  tl.from(".top__hello", {duration: 0.7, delay: 1, opacity: 0, y: 70, ease: "power1"});
  tl.from(".top__profession", {duration: 0.6, opacity: 0, y: 70, ease: "power1"});
  tl.from(".top__text", {duration: 0.6, opacity: 0, y: 70, ease: "power1"});

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".advantages__item", {
    scrollTrigger: {
      trigger: ".advantages",
      toggleActions: "play none none none",
      start: "top 50%",
    }, 
    duration: 1.2,
    y: 250,
    opacity: 0,
    stagger: 0.3,
    ease: "power1",
  });

  gsap.from(".works__link", {
    scrollTrigger: {
      trigger: ".works",
      toggleActions: "play none none none",
      start: "bottom 90%",
    }, 
    duration: 1.5,
    scale: 0,
    ease: "bounce",
  });

  gsap.from(".resume__foto", {
    scrollTrigger: {
      trigger: ".resume__block",
      toggleActions: "play none none none",
      start: "top 80%",
    }, 
    duration: 1.5,
    xPercent: -200,
    opacity: 0,
    ease: "power1",
  });

  gsap.from(".resume__info", {
    scrollTrigger: {
      trigger: ".resume__block",
      toggleActions: "play none none none",
      start: "top 80%",
    }, 
    duration: 1.5,
    xPercent: 200,
    opacity: 0,
    ease: "power1",
  });

  gsap.from(".infographic__item", {
    scrollTrigger: {
      trigger: ".infographic",
      toggleActions: "play none none none",
      start: "top 60%",
    }, 
    duration: 1.2,
    y: 200,
    opacity: 0,
    stagger: 0.4,
    ease: "power1",
  });

  gsap.from(".contacts__item", {
    scrollTrigger: {
      trigger: ".contacts",
      toggleActions: "play none none none",
      start: "top 50%",
    }, 
    duration: 2,
    x: 200,
    opacity: 0,
    stagger: 0.4,
    ease: "expo",
  });

  gsap.from(".form_callback", {
    scrollTrigger: {
      trigger: ".contacts",
      toggleActions: "play none none none",
      start: "top 50%",
    }, 
    duration: 2,
    y: 250,
    opacity: 0,
    ease: "expo",
  });

}

if (body.classList.contains('page-portfolio')) {

  gsap.from(".portfolio__item", {
    scrollTrigger: {
      trigger: ".portfolio",
      toggleActions: "play none none none",
      start: "top 70%",
    }, 
    duration: 1.5,
    y: 250,
    opacity: 0,
    stagger: 0.4,
    ease: "power1",
  });
  
}
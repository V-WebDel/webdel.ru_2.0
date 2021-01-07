/* jQuery */
$(function() {
	
	// Mask form
	$('input[name="phone"]').mask('9 (999) 999 - 99 - 99');


	// Scroll menu
  var width = $(this).width();

  $(window).innerWidth(function () {

    if (width > 768) {

      $(this).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
          $(".menu").addClass("menu_fixed");
        } else if ($(this).scrollTop() < 200) {
          $(".menu").removeClass("menu_fixed");
        }
      });

    } else {
      $(".menu").addClass("menu_hidden");
    }
	});
  
  
	// Open & close menu
  $(".toggle-menu").on("click", function () {
    $(this).toggleClass("toggle-menu_open");
    $(this).siblings("header").find(".menu").toggleClass("menu_fixed menu_hidden");
    return false;
  });


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
  

  // Skill animation
  let block_scroll = $(".skill");
  let counter = 0;

  $(window).on("scroll", function() {

    let scroll = $(window).scrollTop() + $(window).height();
    let offset = block_scroll.offset().top + 200;
   
    if (scroll > offset && counter == 0) {
      $(".skill__line").each(function (){
        let skill = $(this).children(".skill__count").text();
        $(this).animate({width: skill+"%"}, 1200);
      });
      counter = 1;
    }
  });
  
  
});


// Animation from GSAP
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".top__hello", {duration: 0.7, delay: 1, opacity: 0, y: 70, ease: "power1"});
tl.from(".top__profession", {duration: 0.6, opacity: 0, y: 70, ease: "power1"});
tl.from(".top__text", {duration: 0.6, opacity: 0, y: 70, ease: "power1"});


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
    992: { 
      slidesPerView: 3,
      centeredSlides: true,
    }, 
    576: { 
      slidesPerView: 2,
      centeredSlides: false,
    },
    320: { 
      slidesPerView: 1,
      centeredSlides: true,
    }, 
  },
});
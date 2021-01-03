/* jQuery */
$(function() {
	
	// Mask form
	$('input[name="phone"]').mask('9 (999) 999 - 99 - 99');


	// Scroll menu
  var width = $(this).width();

  $(window).innerWidth(function () {

    if (width > 768) {

      $(this).scroll(function () {
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
  $(".toggle-menu").click(function () {
    $(this).toggleClass("toggle-menu_open");
    $(this).siblings("header").find(".menu").toggleClass("menu_fixed menu_hidden");
    return false;
  });
  

  // Skill animation
  let block_scroll = $(".skill");
  let counter = 0;

  $(window).scroll(function() {

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

/* Javascript */

// Этот медиа-запрос нацелен на области просмотра, которые имеют минимальную ширину 320 пикселей
const mQuery = window.matchMedia('(min-width: 540px)')

function handleMobilePhoneResize(e) {   
   // Проверяем, верен ли медиа-запрос
	if (e.matches) {     
		// Затем выводим в консоль следующее сообщение
		console.log('Media Query Matched!')   
	} 
} 

// Настраиваем слушателя событий
mQuery.addListener(handleMobilePhoneResize)



// Swiper Works
var swiper_clinic = new Swiper('.swiper-works', {
  speed: 1400,
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
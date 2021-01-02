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
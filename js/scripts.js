$(".nav-droplink").hover(function () {
  $(".dropdown").slideDown(100);
})
$(".nav-droplink").mouseleave(function () {
  $(".dropdown").hide(100);
})

$(".service-img-overlay").hover(function () {
  $(this).children(".overlay-p").slideDown(200);
  $(this).children(".overlay-heading").slideUp(200);
})
$(".service-img-overlay").mouseleave(function () {
  $(this).children(".overlay-p").slideUp(100);
  $(this).children(".overlay-heading").slideDown(200);
})


//booking show
$(".show-booking").click(function (){
  if(!$(".booking-container").is(":visible")) {
     $(".booking-container").slideDown();
     $('html, body').animate({
      scrollTop: ($('#booking-section').offset().top - 20)
  },500);
  } else {
    $(".booking-container").slideUp();
  }    
})




//scroll to section
jQuery(function ($) {
  $('a[href*="#"]:not([href="#"])').click(function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      headerHeight = 0;
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top - headerHeight
        }, 750);
      }
    }
  });
});

jQuery(document).ready(function ($) {
  var hash = window.location.hash
  if (hash == '' || hash == '#' || hash == undefined) return false;
  var target = $(hash);
  headerHeight = 0;
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    $('html,body').stop().animate({
      scrollTop: target.offset().top - headerHeight
    }, 750);
  }
});


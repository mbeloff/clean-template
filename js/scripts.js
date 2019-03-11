$(".nav-droplink").hover(function () {
  $(".dropdown").show(100);
})
$(".nav-droplink").mouseleave(function () {
  $(".dropdown").hide(100);
})

$(".service-img-overlay").hover(function () {
  $(this).children(".overlay-p").slideDown(200);
  $(this).children(".overlay-heading").slideUp(200);
})
$(".service-img-overlay").mouseleave(function () {
  $(this).children(".overlay-p").hide(100);
  $(this).children(".overlay-heading").slideDown(200);
})



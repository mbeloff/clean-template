$(".nav-droplink").mouseover(function () {
  $(".dropdown").show(100);
})
$(".nav-droplink").mouseleave(function () {
  $(".dropdown").hide(100);
})

$(".service-img-overlay").mouseover(function () {
  $(this).children(".overlay-p").show(200);
})
$(".service-img-overlay").mouseleave(function () {
  $(this).children(".overlay-p").hide(100);
})



$(".birger-button").on("click", function(){
  $(".birger-button").toggleClass("close-btn");
  $(".menu").toggleClass("open-menu");
  if ($('.body').hasClass('overflow')) {
    $(".body").removeClass("overflow");
  } else {
    $(".body").addClass("overflow");
 }
});
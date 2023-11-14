$(window).scroll(function() {
  $(".foto-container").each(function() {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 200) {
      $(this).addClass("transition");
    }
  });
}); 

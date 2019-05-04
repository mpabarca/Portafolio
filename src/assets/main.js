

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    window.M.Carousel.init(elems, {});
  });

  $(document).ready(function() {
    $('#pagepiling').pagepiling({
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
      menu: '#myMenu',
      navigation:true
  });
});

$(function() {
  var header = $(".navbar");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });

});
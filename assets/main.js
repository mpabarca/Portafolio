

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    window.M.Carousel.init(elems, {});
  });

  $(function() 
  {
      $("#nav-linkedin").mouseenter(function(event) {
          $(this).addClass("animated bounceIn");
      });
      
      $("#nav-linkedin").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
          $(this).removeClass("animated bounceIn");
      });
  });
  $(function() 
  {
      $("#nav-github").mouseenter(function(event) {
          $(this).addClass("animated bounceIn");
      });
      
      $("#nav-github").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
          $(this).removeClass("animated bounceIn");
      });
  });
  $(function() 
  {
      $("#linkedin").mouseenter(function(event) {
          $(this).addClass("animated bounceIn");
      });
      
      $("#linkedin").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
          $(this).removeClass("animated bounceIn");
      });
  });
  $(function() 
  {
      $("#github").mouseenter(function(event) {
          $(this).addClass("animated bounceIn");
      });
      
      $("#github").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
          $(this).removeClass("animated bounceIn");
      });
  });
  $(function() 
  {
      $("#email").mouseenter(function(event) {
          $(this).addClass("animated bounceIn");
      });
      
      $("#email").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
          $(this).removeClass("animated bounceIn");
      });
  });

  var widthWindow= window.innerWidth;

    $(document).ready(function() {
      $('#pagepiling').pagepiling({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        menu: '#myMenu',
        navigation: true,
        onLeave: function(index, nextIndex, direction){
          //after leaving section 2
          var widthWindow= window.innerWidth;
          if((index == 1 && direction =='down'&& nextIndex!=5)
              ||(index == 5 && direction =='up'&& nextIndex!=1))
              {
            document.getElementById("nav-home").style["color"]="#7a2828";
            document.getElementById("nav-about").style["color"]="#7a2828";
            document.getElementById("nav-skills").style["color"]="#7a2828";
            document.getElementById("nav-projects").style["color"]="#7a2828";
            document.getElementById("nav-contact").style["color"]="#7a2828";
            document.getElementById("nav-linkedin").style["color"]="#7a2828";
            document.getElementById("nav-github").style["color"]="#7a2828";
            document.getElementById("line-hor").style["border-top"]="2px solid #7a2828";
            document.getElementById("line-ver").style["border-right"]="2px solid #7a2828";
            document.getElementById("logo").style["background-image"]='url("assets/img/logo2.png")';
            if (widthWindow < 1199){
              document.getElementById("one-button").style["background"]="#7a2828";
              document.getElementById("two-button").style["background"]="#7a2828";
              document.getElementById("three-button").style["background"]="#7a2828";
            }
          }
          else if((index == 2 && nextIndex== 1 && direction == 'up')
              ||(index == 2 && nextIndex== 5 && direction == 'down')){
            document.getElementById("nav-home").style["color"]="#fff";
            document.getElementById("nav-about").style["color"]="#fff";
            document.getElementById("nav-skills").style["color"]="#fff";
            document.getElementById("nav-projects").style["color"]="#fff";
            document.getElementById("nav-contact").style["color"]="#fff";
            document.getElementById("line-hor").style["border-top"]="2px solid #fff";
            document.getElementById("line-ver").style["border-right"]="2px solid #fff";
            document.getElementById("logo").style["background-image"]='url("assets/img/logo.png")';
            document.getElementById("nav-linkedin").style["color"]="#fff";
            document.getElementById("nav-github").style["color"]="#fff";
            if (widthWindow < 1199){
              document.getElementById("one-button").style["background"]="#fff";
              document.getElementById("two-button").style["background"]="#fff";
              document.getElementById("three-button").style["background"]="#fff";
            }
            
          }
          else if((index == 3 && nextIndex== 1 && direction == 'up')
              ||(index == 3 && nextIndex== 5 && direction == 'down')){
            document.getElementById("nav-home").style["color"]="#fff";
            document.getElementById("nav-about").style["color"]="#fff";
            document.getElementById("nav-skills").style["color"]="#fff";
            document.getElementById("nav-projects").style["color"]="#fff";
            document.getElementById("nav-contact").style["color"]="#fff";
            document.getElementById("line-hor").style["border-top"]="2px solid #fff";
            document.getElementById("line-ver").style["border-right"]="2px solid #fff";
            document.getElementById("logo").style["background-image"]='url("assets/img/logo.png")';
            document.getElementById("nav-linkedin").style["color"]="#fff";
            document.getElementById("nav-github").style["color"]="#fff";
            if (widthWindow < 1199){
              document.getElementById("one-button").style["background"]="#fff";
              document.getElementById("two-button").style["background"]="#fff";
              document.getElementById("three-button").style["background"]="#fff";
            }
          }
          else if((index == 4 && nextIndex== 1 && direction == 'up')
              ||(index == 4 && nextIndex== 5 && direction == 'down')){
            document.getElementById("nav-home").style["color"]="#fff";
            document.getElementById("nav-about").style["color"]="#fff";
            document.getElementById("nav-skills").style["color"]="#fff";
            document.getElementById("nav-projects").style["color"]="#fff";
            document.getElementById("nav-contact").style["color"]="#fff";
            document.getElementById("line-hor").style["border-top"]="2px solid #fff";
            document.getElementById("line-ver").style["border-right"]="2px solid #fff";
            document.getElementById("logo").style["background-image"]='url("assets/img/logo.png")';
            document.getElementById("nav-linkedin").style["color"]="#fff";
            document.getElementById("nav-github").style["color"]="#fff";
            if (widthWindow < 1199){
              document.getElementById("one-button").style["background"]="#fff";
              document.getElementById("two-button").style["background"]="#fff";
              document.getElementById("three-button").style["background"]="#fff";
            }
          }
          else if((index == 5 && nextIndex== 1 && direction == 'up')
              ||(index == 1 && nextIndex== 5 && direction == 'down')){
            document.getElementById("nav-home").style["color"]="#fff";
            document.getElementById("nav-about").style["color"]="#fff";
            document.getElementById("nav-skills").style["color"]="#fff";
            document.getElementById("nav-projects").style["color"]="#fff";
            document.getElementById("nav-contact").style["color"]="#fff";
            document.getElementById("line-hor").style["border-top"]="2px solid #fff";
            document.getElementById("line-ver").style["border-right"]="2px solid #fff";
            document.getElementById("logo").style["background-image"]='url("assets/img/logo.png")';
            document.getElementById("nav-linkedin").style["color"]="#fff";
            document.getElementById("nav-github").style["color"]="#fff";
            if (widthWindow < 1199){
              document.getElementById("one-button").style["background"]="#fff";
              document.getElementById("two-button").style["background"]="#fff";
              document.getElementById("three-button").style["background"]="#fff";
            }
          }
        }

    });
  });


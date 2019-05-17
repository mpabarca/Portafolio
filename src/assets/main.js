$(function() 
{
    $("#home-button").mouseenter(function(event) {
        $(this).addClass("animated bounceIn");
    });
    
    $("#home-button").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
        $(this).removeClass("animated bounceIn");
    });
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
  
  $(function(){
      document.getElementById('home-iam').innerHTML=$(window).width()+' , '+$(window).height();
  })




    $(document).ready(function() {
      $('#pagepiling').pagepiling({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixPage','sevenPage'],
        menu: '#myMenu',
        navigation: true,
        onLeave: function(index, nextIndex, direction){
          //after leaving section 2
          var widthWindow= window.innerWidth;
          if((index == 1 && direction =='down'&& nextIndex!=7)
              ||(index == 7 && direction =='up'&& nextIndex!=1))
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
          }
          else if(
                (index == 2 && nextIndex== 1 && direction == 'up')
              ||(index == 2 && nextIndex== 7 && direction == 'down')
              ||(index == 3 && nextIndex== 1 && direction == 'up')
              ||(index == 3 && nextIndex== 7 && direction == 'down')
              ||(index == 4 && nextIndex== 1 && direction == 'up')
              ||(index == 4 && nextIndex== 7 && direction == 'down')
              ||(index == 5 && nextIndex== 1 && direction == 'up')
              ||(index == 5 && nextIndex== 7 && direction == 'down')
              ||(index == 6 && nextIndex== 1 && direction == 'up')
              ||(index == 6 && nextIndex== 7 && direction == 'down')
              ||(index == 5 && nextIndex== 1 && direction == 'up')
              ||(index == 1 && nextIndex== 5 && direction == 'down')
              ){

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
          }
        }
    });
  });


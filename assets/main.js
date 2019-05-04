

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    window.M.Carousel.init(elems, {});
  });

  $(document).ready(function() {
    $('#pagepiling').pagepiling({
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
      menu: '#myMenu',
      onLeave: function(index, nextIndex, direction){
        //after leaving section 2
        
        if(index == 1 && direction =='down'){
          document.getElementById("nav-home").style["color"]="#7a2828";
          document.getElementById("nav-about").style["color"]="#7a2828";
          document.getElementById("nav-skills").style["color"]="#7a2828";
          document.getElementById("nav-projects").style["color"]="#7a2828";
          document.getElementById("nav-contact").style["color"]="#7a2828";
        }
        else if(index == 2 && nextIndex== 1 && direction == 'up'){
          document.getElementById("nav-home").style["color"]="#fff";
          document.getElementById("nav-about").style["color"]="#fff";
          document.getElementById("nav-skills").style["color"]="#fff";
          document.getElementById("nav-projects").style["color"]="#fff";
          document.getElementById("nav-contact").style["color"]="#fff";
        }
        else if(index == 3 && nextIndex== 1 && direction == 'up'){
          document.getElementById("nav-home").style["color"]="#fff";
          document.getElementById("nav-about").style["color"]="#fff";
          document.getElementById("nav-skills").style["color"]="#fff";
          document.getElementById("nav-projects").style["color"]="#fff";
          document.getElementById("nav-contact").style["color"]="#fff";
        }
        else if(index == 4 && nextIndex== 1 && direction == 'up'){
          document.getElementById("nav-home").style["color"]="#fff";
          document.getElementById("nav-about").style["color"]="#fff";
          document.getElementById("nav-skills").style["color"]="#fff";
          document.getElementById("nav-projects").style["color"]="#fff";
          document.getElementById("nav-contact").style["color"]="#fff";
        }
        else if(index == 5 && nextIndex== 1 && direction == 'up'){
          document.getElementById("nav-home").style["color"]="#fff";
          document.getElementById("nav-about").style["color"]="#fff";
          document.getElementById("nav-skills").style["color"]="#fff";
          document.getElementById("nav-projects").style["color"]="#fff";
          document.getElementById("nav-contact").style["color"]="#fff";
        }
      }

  });
});


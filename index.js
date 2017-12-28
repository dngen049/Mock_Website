$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
//Animate the links in navbar when scrolling down
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    var navheight = $('.topnav').height();
    if (windscroll >= navheight) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 100) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });
    } else {
        $('nav').removeClass('fixed');
        $('nav  a.active').removeClass('active');
        $('nav  a:first').addClass('active');
    }
}).scroll();

//Change the navbar's color when scrolling
$(window).scroll(function(){
  var windscroll=$(window).scrollTop();
  var Hoheight=$("#Home").height();
  if (windscroll >= Hoheight){
    $(".navbar-default").css({'background-color':'#000', 'opacity':'1.0', 'transition-duration': '2.5s'});
  }
  else{
    $(".navbar-default").css('background-color','transparent');
  }
});

//Btn fadeway
$(window).scroll(function(){
  var topWindow  = $(window).scrollTop();
  var topWindow = topWindow*1.5;
  var WindowHeight = $(window).height();
  var position = topWindow / WindowHeight;
  position = 1-position;
  $('.BtnDown').css('opacity', position);
});

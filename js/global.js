/*
 * Control the animation when the menu link is pressed
 */

var $menu = $(".nav-menu"), // The nav menu that list all pages
    $menuLink = $(".menu-link"), // The menu link btn
    $badge = $(".kubi-badge"), // The logo
    $siteWrap = $(".site-wrap"), // The site wrapper
    $navBar = $(".nav-bar");

// Check to see if Javascript is available
$('.site-wrap').addClass('js');

// When the menu link is pressed
$menuLink.click(function() {
  $menuLink.toggleClass('isActive');
  $menu.toggleClass('isActive');
  $badge.toggleClass('isActive');
  $siteWrap.toggleClass('isActive');

  return false;

});


$(window).scroll(function() {
  var windowHeight = $(window).height();
  var bodyOffSet = window.pageYOffset;


  if(bodyOffSet > windowHeight)
    $(".nav-bar").addClass("newColor");
  else
    $(".nav-bar").removeClass("newColor");

});



/*
 * Control the animation when the menu link is pressed
 */

var $menu = $(".nav-menu"), // The nav menu that list all pages
    $menuLink = $(".menu-link"), // The menu link btn
    $badge = $(".kubi-badge"), // The logo
    $siteWrap = $(".site-wrap"); // The site wrapper

// Check to see if Javascript is available
$('.site-wrap').addClass('js');

// When the menu link is pressed
$menuLink.click(function() {
  $menuLink.toggleClass('isActive');
  $menu.toggleClass('isActive');
  $badge.toggleClass('isActive');
  $siteWrap.toggleClass('isActive');

  /*
   * Activate Velocityjs for smoother animation
   */

  if($menuLink.is('.isActive'))
    $menuLink.velocity({ width: "100%" }, { duration: 150 });
  else
    // The 55px comes from the menu-link size which comes from $menu-link-size in variable.scss file
    $menuLink.velocity({ width: "55px" }, { duration: 200 });

  return false;

});




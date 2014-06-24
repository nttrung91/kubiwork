/**
 * Menu Link
 **/

var $menu = $(".nav-menu"),
    $menuLink = $(".menu-link"),
    $badge = $(".kubi-badge");

// Check to see if Javascript is available
$('.site-wrap').addClass('js');

$menuLink.click(function() {
  $menuLink.toggleClass('isActive');
  $menu.toggleClass('isActive');
  $badge.toggleClass('isActive');
  return false;
});
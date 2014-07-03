/*
 * Control the animation when the menu link is pressed
 */

var $menu = $(".nav-menu"),
    $menuLink = $(".menu-link"),
    $badge = $(".kubi-badge"),
    $siteWrap = $(".site-wrap"),
    $navBar = $(".nav-bar"),
    $dynamicSection = $("#js-dynamic-section");

// Check to see if Javascript is available
$('.site-wrap').addClass('js');

// When the menu link is pressed
$menuLink.click(function() {

  var opts = {
    els: [$menuLink, $menu, $badge, $siteWrap],
    elMethod: "toggle",
    elClass: "isActive"
  };

  manipulateClassesInArray( opts );

  return false;

});


function manipulateClassesInArray (options) {

  if ( options.elMethod === "toggle" ) {
    $.each( options.els, function( key, value ) {
      value.toggleClass(options.elClass);
    });
  }

  else if ( options.elMethod === "remove" ) {
    $.each( options.els, function( key, value ) {
      value.removeClass(options.elClass);
    });
  }

}


/*
 * Dynamically inject new content into the page without reload
 */


// Test for Dynamic Page code
if (Modernizr.history) {

  // history is supported; do magical things

  // hijack the nav click event
  $("#js-dynamic-section,.nav-bar,.nav-menu,.project__controller").on("click","a", function() {

    _href = $(this).attr("href");

    // change the url without a page refresh and add a history entry.
    history.pushState(null, null, _href);

    // load the content
    loadContent(_href);

    // $("nav a").removeClass("current");

    // $("nav a[href$='" + href + "']").addClass("current");


    var opts = {
      els: [$menuLink, $menu, $badge, $siteWrap],
      elMethod: "remove",
      elClass: "isActive"
    };

    manipulateClassesInArray( opts );

    return false;

  });


} else {

  // history is not supported; nothing fancy here

}

function loadContent(href) {

  $dynamicSection
    .fadeOut(200, function() { // fade out the content of the current page
      $dynamicSection
        .hide()
          .load(href + " #subpage", function() { // load the contents of whatever href is
            $dynamicSection.show();
          });
        });
  }

// Enable going back to prev page
$(window).bind("popstate", function() {
    link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
    loadContent(link);
});

/*
 * Change color of nav bar when scroll down pass a certain point
 */

// if(window.location.pathname.indexOf("project") > -1){
//   $(window).scroll(function() {
//     var windowHeight = $(window).height();
//     var bodyOffSet = window.pageYOffset;


//     if(bodyOffSet > windowHeight)
//       $(".nav-bar").addClass("newColor");
//     else
//       $(".nav-bar").removeClass("newColor");

//   });
// }




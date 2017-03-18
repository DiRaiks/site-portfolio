$(document).ready(function() {
  $('header').height($(window).height());
      $(window).resize(function() {
          $('header').height($(window).height());
           })
$('header').width($(window).width());
      $(window).resize(function() {
        $('header').width($(window).width());
      })
    });

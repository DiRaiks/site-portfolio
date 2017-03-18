$(document).ready(function() {
  $('#home').height($(window).height());
      $(window).resize(function() {
          $('#home').height($(window).height());
           })
$('#home').width($(window).width());
      $(window).resize(function() {
        $('#home').width($(window).width());
      })
    });

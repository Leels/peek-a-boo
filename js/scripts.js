$(document).ready(function() {
  $(".clickable").click(function() {
    $("#clown-hidden").slideToggle();
    $("#clown-showing").slideToggle();
  });
});
$(document).ready(function() {
  $("button#orange").click(function() {
    $("body").removeClass();
    $("body").addClass("orange-background");
  });

  $("button#purp").click(function() {
    $("body").removeClass();
    $("body").addClass("purp-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
});

$(document).ready(function(){
  $("h1").click(function(){
    alert("This is a header.");
  });
  $(".clickable").click(function(){
    $("#walrus-shown").toggle();
    $("#walrus-hidden").toggle();
  });
  //$("img").click(function(){
  //  alert("This is an image.");
  //});
  // $("button").click(function(){
  //       $("#zoo").slideUp();
  //   });
  $("#butn1").click(function() {
    $("body").removeClass();
    $("body").addClass("darkback");
    // $("#darkback").toggle():
  });
  $("#butn2").click(function() {
    $("body").removeClass();
    $("body").addClass("lightback");
    // $("#darkback").toggle():
  });
  // $("#button1").click(function(){
  //   $("body").addClass("black-background");
  // });
});


$(document).ready(function() {
  $("#programming-js").click(function() {
      $("#programming-p-js").slideToggle("slow");
  }),
  $("#library-js").click(function() {
      $("#library-p-js").slideToggle("slow");
  }),
  $("#game-js").click(function() {
      $("#game-p-js").slideToggle("slow");
  }),
  $(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top-45},'slow');
  });
});

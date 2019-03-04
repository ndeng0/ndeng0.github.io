
$(document).ready(function() {
  $("#java-p").hide();
  $("#java-js").click(function() {
      $("#java-p").slideToggle("slow");
  }),
  $("#python-p").hide();
  $("#python-js").click(function() {
      $("#python-p").slideToggle("slow");
  }),
  $("#js-p").hide();
  $("#js-js").click(function() {
      $("#js-p").slideToggle("slow");
  }),
  $("#hc-p").hide();
  $("#hc-js").click(function() {
      $("#hc-p").slideToggle("slow");
  }),
  // Slides the page up and down
  $(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top-45},'slow');
  });
});

function graph(id, x, y, c, n) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext("2d");
  var height = 20;
  var bw = $(window).width() - 200;
  var w = Math.min(bw, 800);

  line(ctx, x, y, x+w, y);
  line(ctx, x, y+height, x+w, y+height);

  rect(ctx, c, x, y, x+(n*(w/8)), y+height);

  for(var i=0; i<9; i++) {
    line(ctx, x+(i*(w/8)), y, x+(i*(w/8)), y+height);
  }
}

function rect(ctx, c, sx, sy, ex, ey) {
  ctx.fillStyle = c;
  ctx.fillRect(sx, sy, ex, ey);
}

function line(ctx, sx, sy, ex, ey) {
  ctx.strokeStyle = "black";
  ctx.moveTo(sx, sy);
  ctx.lineTo(ex, ey);
  ctx.stroke();
}

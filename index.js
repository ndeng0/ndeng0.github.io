
$(document).ready(function() {
  $("#skills-js").click(function() {
      $("#skills-p-js").animate({width: 'toggle'}, "slow");
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

function _programming() {
  var canvas = document.getElementById("p-canvas");
  var ctx = canvas.getContext("2d");

  // Bottom line
  line(ctx, 101, 320, 600, 320);
  // Divide lines
  line(ctx, 101, 0, 101, 320);
  line(ctx, 200, 0, 200, 320);
  line(ctx, 300, 0, 300, 320);
  line(ctx, 400, 0, 400, 320);
  line(ctx, 500, 0, 500, 320);

  // Settings for categories text
  ctx.font = "10px";
  ctx.fillStyle = "black";
  ctx.textAlign = "right";

  // Categories
  ctx.fillText("Java", 90, 40);
  ctx.fillText("Python", 90, 120);
  ctx.fillText("Javascript", 90, 200);
  ctx.fillText("HTML/CSS", 90, 280);

  // Levels
  ctx.textAlign = "center";
  ctx.fillText("Nothing", 100, 340);
  ctx.fillText("Something", 200, 340);
  ctx.fillText("OK", 300, 340);
  ctx.fillText("Pretty Good", 400, 340);
  ctx.fillText("Ask Me Anything", 500, 340);

  // Bars
  ctx.fillStyle = "green";
  ctx.fillRect(100,20,300,40);
  ctx.fillStyle = "green";
  ctx.fillRect(100,100,300,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(100,180,200,40);
  ctx.fillStyle = "red";
  ctx.fillRect(100,260,100,40);
}

function _library() {
  var canvas = document.getElementById("l-canvas");
  var ctx = canvas.getContext("2d");

  // Bottom line
  line(ctx, 101, 320, 600, 320);
  // Divide lines
  line(ctx, 101, 0, 101, 320);
  line(ctx, 200, 0, 200, 320);
  line(ctx, 300, 0, 300, 320);
  line(ctx, 400, 0, 400, 320);
  line(ctx, 500, 0, 500, 320);

  // Settings for categories text
  ctx.font = "10px";
  ctx.fillStyle = "black";
  ctx.textAlign = "right";

  // Categories
  ctx.fillText("Processing", 90, 40);
  ctx.fillText("P5.js", 90, 120);
  ctx.fillText("NumPy", 90, 200);
  ctx.fillText("Jquery", 90, 280);

  // Levels
  ctx.textAlign = "center";
  ctx.fillText("Nothing", 100, 340);
  ctx.fillText("Something", 200, 340);
  ctx.fillText("OK", 300, 340);
  ctx.fillText("Pretty Good", 400, 340);
  ctx.fillText("Ask Me Anything", 500, 340);

  // Bars
  ctx.fillStyle = "green";
  ctx.fillRect(100,20,300,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(100,100,200,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(100,180,200,40);
  ctx.fillStyle = "red";
  ctx.fillRect(100,260,100,40);
}

function _game() {
  var canvas = document.getElementById("g-canvas");
  var ctx = canvas.getContext("2d");

  // Bottom line
  line(ctx, 101, 240, 600, 240);
  // Divide lines
  line(ctx, 101, 0, 101, 240);
  line(ctx, 200, 0, 200, 240);
  line(ctx, 300, 0, 300, 240);
  line(ctx, 400, 0, 400, 240);
  line(ctx, 500, 0, 500, 240);

  // Settings for categories text
  ctx.font = "10px";
  ctx.fillStyle = "black";
  ctx.textAlign = "right";

  // Categories
  ctx.fillText("Ren'Py", 90, 40);
  ctx.fillText("Blender", 90, 120);
  ctx.fillText("GameMaker Studio", 90, 200);

  // Levels
  ctx.textAlign = "center";
  ctx.fillText("Nothing", 100, 260);
  ctx.fillText("Something", 200, 260);
  ctx.fillText("OK", 300, 260);
  ctx.fillText("Pretty Good", 400, 260);
  ctx.fillText("Ask Me Anything", 500, 260);

  // Bars
  ctx.fillStyle = "blue";
  ctx.fillRect(100,20,200,40);
  ctx.fillStyle = "red";
  ctx.fillRect(100,100,100,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(100,180,200,40);
}

function line(ctx, sx, sy, ex, ey) {
  ctx.moveTo(sx, sy);
  ctx.lineTo(ex, ey);
  ctx.stroke();
}


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
  line(ctx, 201, 320, 700, 320);
  // Divide lines
  line(ctx, 201, 0, 201, 320);
  line(ctx, 300, 0, 300, 320);
  line(ctx, 400, 0, 400, 320);
  line(ctx, 500, 0, 500, 320);
  line(ctx, 600, 0, 600, 320);

  // Settings for categories text
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "right";

  // Categories
  ctx.fillText("Java", 190, 40);
  ctx.fillText("Python", 190, 120);
  ctx.fillText("Javascript", 190, 200);
  ctx.fillText("HTML/CSS", 190, 280);

  // Levels
  ctx.font = "15px Arial"
  ctx.textAlign = "center";
  ctx.fillText("Nothing", 200, 340);
  ctx.fillText("Something", 300, 340);
  ctx.fillText("OK", 400, 340);
  ctx.fillText("Pretty Good", 500, 340);
  ctx.fillText("Ask Me Anything", 600, 340);

  // Bars
  ctx.fillStyle = "green";
  ctx.fillRect(200,20,300,40);
  ctx.fillStyle = "green";
  ctx.fillRect(200,100,300,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(200,180,200,40);
  ctx.fillStyle = "red";
  ctx.fillRect(200,260,100,40);
}

function _library() {
  var canvas = document.getElementById("l-canvas");
  var ctx = canvas.getContext("2d");

  // Bottom line
  line(ctx, 201, 320, 700, 320);
  // Divide lines
  line(ctx, 201, 0, 201, 320);
  line(ctx, 300, 0, 300, 320);
  line(ctx, 400, 0, 400, 320);
  line(ctx, 500, 0, 500, 320);
  line(ctx, 600, 0, 600, 320);

  // Settings for categories text
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "right";

  // Categories
  ctx.fillText("Processing", 190, 40);
  ctx.fillText("P5.js", 190, 120);
  ctx.fillText("NumPy", 190, 200);
  ctx.fillText("Jquery", 190, 280);

  // Levels
  ctx.font = "15px Arial"
  ctx.textAlign = "center";
  ctx.fillText("Nothing", 200, 340);
  ctx.fillText("Something", 300, 340);
  ctx.fillText("OK", 400, 340);
  ctx.fillText("Pretty Good", 500, 340);
  ctx.fillText("Ask Me Anything", 600, 340);

  // Bars
  ctx.fillStyle = "green";
  ctx.fillRect(200,20,300,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(200,100,200,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(200,180,200,40);
  ctx.fillStyle = "red";
  ctx.fillRect(200,260,100,40);
}

function _game() {
  var canvas = document.getElementById("g-canvas");
  var ctx = canvas.getContext("2d");

  // Bottom line
  line(ctx, 201, 240, 700, 240);
  // Divide lines
  line(ctx, 201, 0, 201, 240);
  line(ctx, 300, 0, 300, 240);
  line(ctx, 400, 0, 400, 240);
  line(ctx, 500, 0, 500, 240);
  line(ctx, 600, 0, 600, 240);

  // Settings for categories text
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "right";

  // Categories
  ctx.fillText("Ren'Py", 190, 40);
  ctx.fillText("Blender", 190, 120);
  ctx.fillText("GameMaker Studio", 190, 200);

  // Levels
  ctx.font = "15px Arial"
  ctx.textAlign = "center";
  ctx.fillText("Nothing", 200, 260);
  ctx.fillText("Something", 300, 260);
  ctx.fillText("OK", 400, 260);
  ctx.fillText("Pretty Good", 500, 260);
  ctx.fillText("Ask Me Anything", 600, 260);

  // Bars
  ctx.fillStyle = "blue";
  ctx.fillRect(200,20,200,40);
  ctx.fillStyle = "red";
  ctx.fillRect(200,100,100,40);
  ctx.fillStyle = "blue";
  ctx.fillRect(200,180,200,40);
}

function line(ctx, sx, sy, ex, ey) {
  ctx.strokeStyle = "black";
  ctx.moveTo(sx, sy);
  ctx.lineTo(ex, ey);
  ctx.stroke();
}

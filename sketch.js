// PLayer
let player;

// Array of Bullets
let bullet = [];

// Array of Enemies
let enemy = [];

// Array of Dropped Items
let item = [];

// Variables
let wave = 0;
let instr_1;
let instr_2;
let instr_3;
let shoot = false;

// Button
let attack_up;
let hp_up;
let heal_hp;

function setup() {
  createCanvas(windowWidth, windowHeight-200);
  noCursor();

  player = new Player(width/2, height/2);

  hp_up = createButton("HP UP Cost: 10M ");
  attack_up = createButton("Attack Up Cost: 10M");
  heal_hp = createButton("Heal Cost: 20M");

  hp_up.mousePressed(hpup);
  attack_up.mousePressed(atkup);
  heal_hp.mousePressed(heal);

  instr_1 = createDiv("WASD to move");
  instr_2 = createDiv("Mouse to aim");
  instr_3 = createDiv("Space or Left Mouse to shoot");
  instr_1.style("font-size", "16px");
  instr_2.style("font-size", "16px");
  instr_3.style("font-size", "16px");
}

function draw() {
  background(0);

  if(!player.alive) {
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    textSize(16);
    text("REFRESH PAGE TO PLAY AGAIN", width/2, height/2 + 40);
    text("YOU LASTED " + (wave-1) + " WAVES", width/2, height/2 + 70);
    pop();
  } else {
  if(enemy.length == 0) {
    spawnEnemy();
    wave++;
  }

  push();
  fill(255);
  textSize(32);
  text("Wave: " + (wave-1), width-textWidth("Wave:      "), 40);
  pop();

  // Dropped Items
  for(var i = 0; i < item.length; i++) {
    item[i].show();

    if(dist(item[i].x, item[i].y, player.x, player.y) <= 30) {
      if(item[i].type == "HP") {
        player.hp += 5;
      } else if(item[i].type == "MONEY") {
        player.money += 3;
      }
      item.splice(i, 1);
    }
  }

  // Bullet Movement
  for(var b of bullet) {
    b.move();
    b.display();

    if(b.location.x < 0 || b.location.x > width || b.location.y < 0 || b.location.y > height) {
      bullet.splice(bullet.indexOf(b), 1);
    }
  }

  for(var i = 0; i < enemy.length; i++) {
    enemy[i].move(player, enemy);
    enemy[i].show();

    // Bullet Collision with Enemies
    for(var j = 0; j < bullet.length; j++) {
      if(dist(bullet[j].location.x, bullet[j].location.y, enemy[i].x, enemy[i].y) <= 15) {
        enemy[i].hp -= bullet[j].dmg;
        bullet.splice(j, 1);
      }
    }

    // Chance to Attack Player
    if(dist(player.x, player.y, enemy[i].x, enemy[i].y) <= 40) {
      var chance = random(1);
      if(frameCount%30 == 0 && chance <= 0.2) {
        player.hp -= 10;
      }
    }

    // Kills Enemy when Enemy HP < 0
    if(enemy[i].hp <= 0) {
      item.push(new Drop(enemy[i].x, enemy[i].y, enemy[i].dropItem()));
      enemy.splice(i, 1);
    }
  }

  // Player
  player.display();
  player.move();
  if(player.hp <= 0) {
    player.alive =false;
  }

  if((shoot || mouseIsPressed) && frameCount%10 == 0) {
    bullet.push(new Bullet(player.x, player.y, player.dmg));
  }

  drawCursor();
  }
}

function keyPressed() {
  switch(key) {
    case 'w': player.up = true; break;
    case 's': player.down = true; break;
    case 'a': player.left = true; break;
    case 'd': player.right = true; break;
  }

  if(key == ' ') {
    shoot = true;
  } else if(key == 'k') {
    enemy = [];
  } else if(key == 'm') {
    player.money += 100;
  }
}

function keyReleased() {
  switch(key) {
    case 'w': player.up = false; break;
    case 's': player.down = false; break;
    case 'a': player.left = false; break;
    case 'd': player.right = false; break;
  }

  if(key == ' ') {
    shoot = false;
  }
}

function hpup() {
  if(player.money >= 10) {
    player.money -= 10;
    player.max_hp += 5;
  }
}

function atkup() {
  if(player.money >= 10) {
    player.money -= 10;
    player.dmg += 5;
  }
}

function heal() {
  if(player.money >= 20 && player.hp != player.max_hp) {
    player.money -= 20;
    player.hp += 10;
  }
}

function spawnEnemy() {
  var i = 0;
  var difficulty = Math.ceil(Math.pow(1.1, wave-10));
  while(enemy.length < difficulty * 5) {
    let rw = random(-50, width+50);
    let rh = random(-50, height+50);
    if((rw < 0 || rw > width) && (rh < 0 || rh > height)) {
      enemy.push(new Enemy(rw, rh, wave, i));
    }
    i++;
  }
}

function drawCursor() {
    push();
    stroke(255, 0, 0);
    strokeWeight(5);
    line(mouseX-10, mouseY, mouseX+10, mouseY);
    line(mouseX, mouseY-10, mouseX, mouseY+10);
    stroke(0);
    strokeWeight(0);
    pop();
}

class Player {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspd = 0;
    this.yspd = 0;

    this.alive = true;
    this.max_hp = 20;
    this.hp = 20;
    this.money = 0;
    this.dmg = 3;

    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
  }

  move() {
    if(this.left && this.x - 15 > 0) {
      this.xspd = -5;
    } else if(this.right && this.x + 15 < width) {
      this.xspd = 5;
    } else {
      this.xspd = 0;
    }

    if(this.up && this.y - 15 > 0) {
      this.yspd = -5;
    } else if(this.down && this.y + 15 < height) {
      this.yspd = 5;
    } else {
      this.yspd = 0;
    }

    this.x += this.xspd;
    this.y += this.yspd;
  }

  display() {
    push();
    fill(0, 255, 0);
    circle(this.x, this.y, 30);

    if(this.hp >= this.max_hp) {
      this.hp = this.max_hp;
    }

    textAlign(LEFT);
    textSize(16);
    text("HP: " + this.hp + "/" + this.max_hp, 20, 20);
    text("Money: " + this.money, 20, 40);
    text("Damage: " + this.dmg, 20, 60);
    pop();
  }
}

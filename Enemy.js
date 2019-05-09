class Enemy {

  constructor(x, y, difficulty, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.hp = 5 * difficulty;
    this.spd = 10;
    this.alive = true;
  }

  move(player, other) {
    if(dist(this.x, this.y, player.x, player.y) > 30) {
      if(this.x != player.x) {
        this.x += (player.x - this.x)/width * this.spd;
      }
      if(this.y != player.y) {
        this.y += (player.y - this.y)/height * this.spd;
      }
    }

    for(let o of other) {
      if(o.id != this.id) {
        let d = dist(this.x, this.y, o.x, o.y);
        if(d <= 30) {
          this.x -= (o.x - this.x)/width * this.spd * 2;
          this.y -= (o.y - this.y)/height * this.spd * 2;
        }
      }
    }
  }

  dropItem() {
    let randomItem = random(1);

    if(randomItem <= 0.2) {
      return "HP";
    } else if(randomItem > 0.2 && randomItem < 0.4) {
      return "MONEY";
    } else {
      return "NODROP";
    }
  }

  show() {
    push();
    fill(255,0,0);
    circle(this.x, this.y, 30);
    pop();
  }
}

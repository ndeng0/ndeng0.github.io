class Drop {

  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  show() {
    push();
    textSize(16);
    textAlign(CENTER);
    if(this.type == "HP") {
      fill(0, 255, 0);
      text("H", this.x, this.y);
    } else if(this.type == "BULLET") {
      fill(255, 255, 0);
      text("B", this.x, this.y);
    } else if(this.type == "MONEY") {
      fill(255, 255, 0);
      text("M", this.x, this.y);
    } else if(this.type == "EXP") {
      fill(127, 255, 0);
      text("E", this.x, this.y);
    }
    pop();
  }
}

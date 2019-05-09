class Bullet {

  constructor(x, y, dmg) {
    this.location = createVector(x,y);
    this.velocity = createVector(mouseX-x, mouseY-y);
    this.velocity.setMag(5);

    this.dmg = dmg;
  }

  move() {
    this.location.add(this.velocity);
  }

  display() {
    push();
    fill(0, 0, 255);
    circle(this.location.x, this.location.y, 5);
    pop();
  }
}

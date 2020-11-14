class Player {
  constructor(canvas, lives, positionX) {
    this.size = 10;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    // pala
    this.height = 175;
    this.width = 10;
    this.y = (this.canvas.height - this.height) / 2;
    this.x = positionX;

    this.speed = 7;
    this.score = 0;
    this.lives = lives;
  }

  update(direction) {
    this.y = this.y + direction * this.speed;
  }

  draw() {
    this.drawPlayer();
    this.checkCollision();
  //  this.drawLives();
  //  this.drawScore();

}

  drawPlayer() {
    this.ctx.beginPath();
    this.ctx.rect(this.x,this.y,this.width,this.height);
    this.ctx.fillStyle = "#000000";
    this.ctx.fill();
    this.ctx.closePath();
  }
  // puntuación
drawScore() {
  this.ctx.font = "22px Arial";
  this.ctx.fillStyle = "#ffffff";
  this.ctx.fillText("Score: " + this.score, 20, 40);
}
  // vidas
  drawLives() {
    this.ctx.font = "22px Arial";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText("Lives: " + this.lives, 20, 80);
  }

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if (this.y - this.size / 2 <= 0) {
      this.direction = 2;
    } else if (this.y + this.size / 2 >= this.canvas.height) {
      this.direction = -2;
    }
  }

  checkCollision(){

    if(this.y + this.size / 2 <= 0) {
      this.y = -this.y;
      console.log("arriba");
  }
  if (this.y + this.size / 2 >= this.canvas.height - this.height){
    this.y = this.y -2
    console.log("abajo")
  }

  }
}

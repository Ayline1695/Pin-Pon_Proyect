class Player {
  constructor(canvas, lives, positionX) {
    this.size = 40;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    // pala
    this.paddleHeight = 175;
    this.paddleWidth = 10;
    this.paddleY = (this.canvas.height - this.paddleHeight) / 2;
    this.paddleX = positionX;

    this.speed = 7;
    this.score = 0;
    this.lives = lives;
  }

  update(direction) {
    this.paddleY = this.paddleY + direction * this.speed;
    console.log(this.paddleY)
  }

  draw() {
    this.drawPlayer();
    this.drawLives();
    this.drawScore();
  }




  drawPlayer() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.paddleX,
      this.paddleY,
      this.paddleWidth,
      this.paddleHeight
    );
    this.ctx.fillStyle = "#000000";
    this.ctx.fill();
    this.ctx.closePath();
  }
  // puntuación
  drawScore() {
    this.ctx.font = "22px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, 20, 40);
  }
  // vidas
  drawLives() {
    this.ctx.font = "22px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 100, 40);
  }

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if (this.y - this.size / 2 <= 0) {
      this.direction = 1;
    } else if (this.y + this.size / 2 >= this.canvas.height) {
      this.direction = -1;
    }
  }

  //checkCollision(imp){
  //
  //}
}

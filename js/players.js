class Player {
  constructor(canvas, lives, positionX) {
    this.size = 40;
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
    console.log(this.y)
  }

  draw() {
    this.drawPlayer();
    this.drawLivesP1();
    this.drawScoreP1();
    this.drawLivesP2();
    this.drawScoreP2();
  }




  drawPlayer() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.ctx.fillStyle = "#000000";
    this.ctx.fill();
    this.ctx.closePath();
  }
  // puntuación
drawScoreP1() {
  this.ctx.font = "22px Arial";
  this.ctx.fillStyle = "#0095DD";
  this.ctx.fillText("Score: " + this.score, 20, 40);
}

  // vidas
  drawLivesP1() {
    this.ctx.font = "22px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Lives: " + this.lives, 20, 80);
  }
    // puntuación
drawScoreP2() {
    this.ctx.font = "22px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, this.canvas.width -100, 80);
  }
  
    // vidas
    drawLivesP2() {
      this.ctx.font = "22px Arial";
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 100, 40);
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
    if(this.y > this.canvas.height || this.y < 0) {
        this.y = -this.y;
    }
   

  }
}

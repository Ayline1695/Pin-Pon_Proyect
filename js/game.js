"use strict";
class Game{
    constructor(canvas, playerOne, playerTwo){
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.ball = new Ball(canvas);
        this.isGameOver = false;
        //empate
        this.isDeadHeath = false;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }
 
    start(){
        
        
        // cantidad random de pelotas
        const loop = () => {
           
        //const ball = new Ball(canvas);
        this.drawCanvas();
        this.checkAllCollisions();
        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
        //this.player.move();
 
        if (!this.isGameOver) {
            window.requestAnimationFrame(loop);
          }
        };

          window.requestAnimationFrame(loop);
    }

    updateCanvas(){
        this.ball.update();
    }

    clearCanvas(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    drawCanvas(){
        this.drawLines();
        this.drawScoreLives();
        this.playerOne.draw();
        this.playerTwo.draw();
        this.ball.draw();
    }

    drawLines(){
        this.context.beginPath();
        this.context.strokeStyle = "#ffffff";
        this.context.strokeRect(0,0,this.canvas.width/2,this.canvas.height);
        this.context.strokeRect(0,0,this.canvas.width+2,this.canvas.height);
        this.context.stroke();
        this.context.closePath();
    }

  // puntuación
  drawScoreLives() {
    this.context.beginPath();
    this.context.font = "24px Helvetica";
    this.context.fillText("Score: " + this.playerOne.score + " / " + this.playerTwo.score + " Lives: " + this.playerOne.lives + " / " + this.playerTwo.lives, this.canvas.width/2 - 125, 40);
    this.context.fillStyle = "#ffffff";
    this.context.closePath();
  }

  //  vidas
  //  drawLives() {
  //    this.context.font = "22px Arial";
  //    this.context.fillStyle = "#ffffff";
  //    this.context.fillText("Lives: " + this.playerOne.lives + "/" + this.playerTwo.lives, this.canvas.width/2, 80);
  //  }

    checkAllCollisions(){
        
        this.ball.collisionBall(this.playerOne,this.playerTwo);
        this.playerOne.checkCollision();
        this.playerTwo.checkCollision();

    }
    gameOverCallback(callback) {
                    
        if(!this.playerTwo.lives || !this.playerTwo.lives){
            this.onGameOver = callback;
        }
        else { // volver a poner en la posición inicial
            this.x = this.canvas.width/2;
            this.y = this.canvas.height/2;
            this.dx = 2;
            this.dy = +2;
        }
        
    }
   
}

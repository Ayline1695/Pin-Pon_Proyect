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
        this.playerOne.draw();
        this.playerTwo.draw();
        this.ball.draw();
    }

    drawLines(){
        this.context.beginPath();
        this.context.strokeRect(0,0,this.canvas.width/2,this.canvas.height);
        this.context.strokeRect(0,0,this.canvas.width+2,this.canvas.height);
        this.context.fillStyle = "#ffffff";
        this.context.stroke();
        this.context.closePath();
    }

    checkAllCollisions(){
        
        this.ball.collisionBall(this.playerOne,this.playerTwo);
        this.playerOne.checkCollision();
        this.playerTwo.checkCollision();

    }
    gameOverCallback(callback) {
        this.onGameOver = callback;
    }
   
}
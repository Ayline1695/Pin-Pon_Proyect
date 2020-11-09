"use strict";
class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.player;
        this.ball = [];
        this.isGameOver = false;
        //empate
        this.isDeadHeath = false;
    }
 
    start(){
        
        this.player = new Players(this.canvas,2);
        
        // cantidad random de pelotas
        const loop = () => {
            this.ball = new Ball(this.canvas,1);

        //const ball = new Ball(canvas);
        //this.ball.draw();
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
        this.player.update();
        this.ball.update();
    }

    clearCanvas(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    drawCanvas(){
        this.canvas = document.querySelector("canvas");
        this.context.beginPath();
        this.context.strokeRect(0,0,this.canvas.width/2,this.canvas.height);
        this.context.strokeRect(0,0,this.canvas.width+2,this.canvas.height);
        this.context.fillStyle = "#ffffff";
        this.context.stroke();
        this.context.closePath();

        this.player.draw();
        this.ball.draw();
    }

    checkAllCollisions(){
        this.player.checkScreen();
        this.ball.colllisionBall();
    }
    gameOverCallback(callback) {
        this.onGameOver = callback;
    }
   
}
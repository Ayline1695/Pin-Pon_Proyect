"use strict";
class Game{
    constructor(canvas){
       this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.player;
        this.ball = [];
        this.isGameOver = false;
    }
 
    start(){
        this.drawBackground();
        const player = new Players(this.canvas,2);
        player.move();
        const ball = new Ball(canvas);
        ball.draw();
        

     //  if (!this.isGameOver) {
     //      this.isGameOver = true;
     //      window.requestAnimationFrame(loop);
     //    }
     //    window.requestAnimationFrame(loop);
    }

    drawBackground(){
        this.canvas = document.querySelector("canvas");
        this.context.strokeRect(300,0,400,500);
        this.context.strokeRect(700,0,400,500);
    }
    
   
}
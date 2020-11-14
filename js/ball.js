"use-strict"

class Ball {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = this.canvas.width/2;
        this.y = this.canvas.height/2;
        this.dx = 2;
        this.dy = -2;
        this.ballRadius = 10;
        this.lives = 3;
    }
    draw(){
        this.drawBall();

        this.x += this.dx;
        this.y += this.dy;
    }
    drawBall(){

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fill();
        this.ctx.closePath();
        
    }
    collisionBall(playerOne,playerTwo){
        
        if(this.y + this.dy > this.canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius){
            this.dy = -this.dy;
        }
        else if(this.x + this.dx > this.canvas.width-this.ballRadius) {
            if(this.y + this.dy >= playerOne.y + playerOne.size) {this.dx = -this.dx;}
            else{
            playerOne.lives--;
            playerTwo.score++;
        }
        
        }
        else if (this.x + this.dx < this.ballRadius) {
            if (this.y + this.dy <= playerTwo.y + playerTwo.size){this.dx = -this.dx;}
        
            else{
            playerTwo.lives--;
            playerOne.score++;
        }
    }
    }


    update(){
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    }

}
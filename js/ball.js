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

        //if(this.y + this.dy > this.canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius){
        //    this.dy = -this.dy;
        //}

        if(this.x + this.dx > this.canvas.width-this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }
        if(this.y + this.dy > this.canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }
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
        const colliArriba = this.y + this.dy / 2 > playerOne.y - playerOne.height / 2;
        const colliAbajo = this.y - this.dy / 2 < playerOne.y + playerOne.size / 2;
        const colliIzquierda = this.x - this.dx < playerTwo.x + playerTwo.size / 2;
        const colliDerecha = this.x + this.dx / 2 > playerOne.x - playerOne.size / 2;
        if (colliIzquierda) {
            console.log("izquierda");
            this.dy = -this.dy;
        }
        return false;
        
        
    }

    checkCollisionEnemy(enemy) {
        const collideRight = this.x + this.dx / 2 > playerOne.x - playerTwo.size / 2;
        const collideLeft = this.x - this.dx / 2 < playerTwo.x + playerTwo.size / 2;
        const collideTop = this.y + this.dy / 2 > playerOne.y - playerOne.size / 2;
        const collideBottom = this.y - this.dy / 2 < playerTwo.y + playerTwo.size / 2;

    if (collideRight && collideLeft && collideTop && collideBottom) {
        console.log("colision");
      
    }

    return false;
  }


    update(){
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    }

}
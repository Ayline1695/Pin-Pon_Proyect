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

        if(this.y + this.dy > this.canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius){
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
        // colision arriba y abajo
        if(this.y + this.dy > this.canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius){
                this.dy = -this.dy;
            }
            // izquierda /derecha
            else if(this.x + this.dx > this.canvas.width-this.ballRadius|| this.x + this.dx < this.ballRadius) {

                if (this.y  > playerOne.y && this.y  < playerOne.y + playerOne.height || this.y  > playerTwo.y && this.y  < playerTwo.y + playerTwo.height){
                    // va mas rapido cada vez que le da a la barra
                   // this.dy += +this.dy;
                    // rebota en la barra
                    this.dx = -this.dx;
                }
                // si no, se reinicia el juego
                else {
                    this.lives--; // se resta la 1 de las 3 vidas

                    if(!this.lives){
                        alert("GAME OVER");
                        document.location.reload();
                    }
                    else { // volver a poner en la posición inicial
                        this.x = this.canvas.width/2;
                        this.y = this.canvas.height/2;
                        this.dx = 2;
                        this.dy = -2;
                    }
                }
                
            }
    }

    update(){
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    }

}
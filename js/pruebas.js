// colision arriba y abajo
if(this.y + this.dy > this.canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius){
    this.dy = -this.dy;
}
// izquierda /derecha
else if(this.x + this.dx > this.canvas.width-this.ballRadius|| this.x + this.dx < this.ballRadius) {

 //  if (this.y  > playerOne.y && this.y  < playerOne.y + playerOne.height || this.y  > playerTwo.y && this.y  < playerTwo.y + playerTwo.height){
 //      // va mas rapido cada vez que le da a la barra
 //     this.dy += +this.dy;
 //      // rebota en la barra
 //      this.dx = -this.dx;
 //  }
    if (this.y  > playerOne.y && this.y  < playerOne.y + playerOne.height){
        // va mas rapido cada vez que le da a la barra
       this.dy += +this.dy;
        // rebota en la barra
        this.dx = -this.dx;
    }
    // si no, se reinicia el juego
    else {
         // se resta la 1 de las 3 vidas
        playerOne.lives--;
        playerTwo.score++;

        if(!playerOne.lives){
            alert("GAME OVER");
            document.location.reload();
        }
        else { // volver a poner en la posición inicial
            this.x = this.canvas.width/2;
            this.y = this.canvas.height/2;
            this.dx = 2;
            this.dy = +2;
        }
    }
    if (this.y  > playerTwo.y && this.y  < playerTwo.y + playerTwo.height){
        // va mas rapido cada vez que le da a la barra
       this.dy += +this.dy;
        // rebota en la barra
        this.dx = -this.dx;
    }
    // si no, se reinicia el juego
    else {
         // se resta la 1 de las 3 vidas
        playerTwo.lives--;
        playerOne.score++;

        if(!playerTwo.lives){
            alert("GAME OVER");
            document.location.reload();
        }
        else { // volver a poner en la posición inicial
            this.x = this.canvas.width/2;
            this.y = this.canvas.height/2;
            this.dx = 2;
            this.dy = +2;
        }
    }
    
}
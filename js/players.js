class Players  {
    constructor(canvas, lives){
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        // pala 1
        this.paddleHeight = 175;
        this.paddleWidth = 10;
        this.paddleY = (this.canvas.height-this.paddleHeight)/2;
        this.paddleX = (this.canvas.width-this.paddleWidth)-(30*2);
        // pala 2
        this.paddleSecondHeight = 175;
        this.paddleSecondWidth = 10;
        this.paddleSecondY = (this.canvas.height-this.paddleSecondHeight)/2;
        this.paddleSecondX = (this.canvas.width+this.paddleSecondWidth)/24;
        
        this.topPress = false;
        this.downPress = false;
        this.score = 0;
        this.lives = lives;
        this.direction = 0;
    }
    update(){
        this.paddleY = this.paddleY;
        this.paddleSecondY = this.paddleSecondY;
    }

    draw(){
        this.playerOne();
        this.playerTwo();
        this.drawLives();
        this.drawScore();
    }

  //move(direction){
  //    this.direction = direction;
  //    
  //}
    
    checkScreen(){
        if (this.paddleY - this.paddleHeight /2 <= 0){
            this.direction = 1
        }
        else if (this.paddleY + this.paddleHeight /2 >= this.canvas.height){
            this.direction = -1;
        }
    }

    playerOne(){
    // draw
       this.ctx.beginPath();
       this.ctx.rect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight);
       this.ctx.fillStyle = "#000000";
       this.ctx.fill();
       this.ctx.closePath();
       this.playerOneMove();
    }
    playerOneMove(){
    
    function keyDownHandler(e){
        // arriba Q
            if(e.keyCode == 83){
                this.topPress = true;
            }
        // abajo S
            else if(e.keyCode == 87){
                this.downPress = true;
            }
        }
    function keyUpHandler(e){
            if(e.keyCode == 83){
                this.topPress = false;
            }
            else if(e.keyCode == 87){
                this.downPress = false;
            }
        }

        document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    }
    playerTwo(){

    // draw
       this.ctx.beginPath();
       this.ctx.rect(this.paddleSecondX, this.paddleSecondY, this.paddleSecondWidth,   this.paddleSecondHeight);
       this.ctx.fillStyle = "#000000";
       this.ctx.fill();
       this.ctx.closePath();
       this.playerTwoMove();
    }
    playerTwoMove(){


    const keyDownHandler = (e) => {
        // arriba
            if(e.keyCode == 40){
                this.topPress = true;
            }
        // abajo
            else if(e.keyCode == 38){
                this.downPress = true;
            }
        }
      const keyUpHandler = (e) =>{
            if(e.keyCode == 40){
                this.topPress = false;
            }
            else if(e.keyCode == 38){
                this.downPress = false;
            }
        }
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
    }

    // puntuación
    drawScore(){
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle  = "#0095DD";
    this.ctx.fillText("Score: "+ this.score, 8, 20);
}
    // vidas
    drawLives(){
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Lives: " + this.lives, this.canvas.width-65 ,20);
}
    setDirection(direction){
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
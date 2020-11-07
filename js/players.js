class Players  {
    constructor(game,x,y,w,h){
        super(game,x,y,w,h);
        this.ctx = canvas.getContext("2d");
        this.topPress = false;
        this.downPress = false;
    }
    move(){
        playerOne();
        playerTwo();
        
    }
    playerOne(){
        this.paddleHeight = 175;
        this.paddleWidth = 10;
        this.paddleY = (canvas.height-paddleHeight)/2;
        this.paddleX = (canvas.width-paddleWidth)-20;
    // draw
       this.ctx.beginPath();
       this.ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
       this.ctx.fillStyle = "#0095DD";
       this.ctx.fill();
       this.ctx.closePath();
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

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
    }
    playerTwo(){

        this.paddleSecondHeight = 175;
        this.paddleSecondWidth = 10;
        this.paddleSecondY = (canvas.height-paddleSecondHeight)/2;
        this.paddleSecondX = (canvas.weight+paddleSecondWidth)/24;
    // draw
       this.ctx.beginPath();
       this.ctx.rect(paddleSecondX, paddleSecondY, paddleSecondWidth,   paddleSecondHeight);
       this.ctx.fillStyle = "#FFFFFF";
       this.ctx.fill();
       this.ctx.closePath();

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e){
        // arriba
            if(e.keyCode == 40){
                this.topPress = true;
            }
        // abajo
            else if(e.keyCode == 38){
                this.downPress = true;
            }
        }
        function keyUpHandler(e){
            if(e.keyCode == 40){
                this.topPress = false;
            }
            else if(e.keyCode == 38){
                this.downPress = false;
            }
        }
    }
    collision(imp){
       // if(this.y > canvas.height){}
    }
}
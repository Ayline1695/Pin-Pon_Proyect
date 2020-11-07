"use-strict"

class Ball extends Component {
    constructor(game){
        super(game);
        this.ctx = canvas.getContext("2d");
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.dx = 2;
        this.dy = -2;
        this.ballRadius = 10;
    }
    draw(){
        this.ctx.clearRect(0,0,ctx.width, ctx.height)
        drawBall();
        move()
        draw()
    }
    drawBall(){
        // forma redonda
      
        //empieza a dibujar
         ctx.beginPath();
    // se sustituye por la posicion que deberia tener
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        context.fillStyle = "#FF0000";
        context.fill();
        context.closePath();
        
    }
    move(){
        // rebota en las paredes
        if(this.y + this.dy > ctx.height-ballRaius || y + dy < ballRadius){
            dy = -dy;
        }
        else if(this.x + this.dx > ctx.width-ballRadius || x +dx < ballRaius){
            
        }
        this.x += this.dx;
        this.y += this.dy;
        requestAnimationFrame(move)
    }
}
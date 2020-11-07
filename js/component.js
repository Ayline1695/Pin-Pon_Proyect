class Component {
    constructor(game, x,y,w,h){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image()
    }
    drawComponent(imgSource){
        let daContext = this.game.context;
        this.img.src = imgSource;

        daContext.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}
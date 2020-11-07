"use-strict"

//window.onload = () => {
//  document.getElementById('start-button').onclick = () => {
//    startGame();
//  };
//
// function startGame() {
//    const myGame = new Game();
//    myGame.init();
//    
// } 
// }

 const main = () => {
   const buildDom = (html) => {
     const main = document.querySelector('main');
     main.innerHTML = html;
   }
  const buildScreen = () => {
    buildDom(`
    <div class="game-intro">
    <img src="" alt="" class="logo-img" />
    <h1>Pin - Pon</h1>
    <img src="" alt="" class="logo-img" />
    <br />
    <button id="start-button">Start Game</button>
    <p>Use<br/>UP and DOWN arrow o W and S<br/>to control the paddles!</p>
  </div>`);
  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", buildGame)
  }
  const buildGame = () =>{
    buildDom(`
   
    <div id="game-board">
    <canvas id="canvas" width="600" height="500"></canvas>
    </div>
  `);
  const width = document.querySelector("#game-board").offsetWidth;
  const height = document.querySelector("#game-board").offsetHeight;

  const canvasElement = document.querySelector("#canvas");

  canvasElement.setAttribute("width",width);
  canvasElement.setAttribute("height", height);
// enlace a pagina GAME
  const game = new Game(canvasElement)

  // Win / Lose / Equal
  //game.gameOverCallback(buildGameOver);

  game.start();

// const setPlayersDirection = event => {
//    const key = event.keyCode;
//    const keysUsefull = [38,40,87,83];
//    if (keysUsefull.includes(key)){
//        event.preventDefault();
//        switch (key){
//            case 38:
//            case 87:
//                if (this.y >= 10) this.x -= 20;
//            break;
//            case 40:
//            case 83:
//                if (this.x <= 490 - this.width) this.x += 20;
//            break;
//        }
//    }
//
// };
// document.addEventListener("keydown", setPlayersDirection)

  };
  const buildGameOver = () =>{
    buildDom(`<div class="game-intro">
    <p>Loser!</p>
    <p class="score"></p>
    <img src="" alt="Loser" class="logo-img" />
    <br />
    <button class="restart">Restart</button>
    
  </div>`);
  const restartButton = document.querySelector(".restart");
  restartButton.addEventListener("click", buildGame)
  };

  buildScreen();
 }

 window.addEventListener("load", main)
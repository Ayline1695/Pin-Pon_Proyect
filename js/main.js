"use-strict"

 const main = () => {
   const buildDom = (html) => {
     const main = document.querySelector('main');
     main.innerHTML = html;
   }

  const buildScreen = () => {
    buildDom(`
    <div class="game-intro">
    <img src="./img/logo2.png" alt="" class="logo-img" />
    <br />
    <button id="start-button">Start Game</button>
    <p>Use<br/>UP and DOWN arrow o W and S<br/>to control the paddles!</p>
  </div>`);
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", buildGame)
  }

  const buildGame = () =>{
    buildDom(`
      <div class="game-board">
      <canvas id="canvas"></canvas>
      </div>
            `);

  const width = document.querySelector(".game-board").offsetWidth;
  const height = document.querySelector(".game-board").offsetHeight;
  const canvasElement = document.querySelector("#canvas");

  canvasElement.setAttribute("width", width);
  canvasElement.setAttribute("height", height);

  const playerOne = new Player(canvasElement, 3,20);
  const playerTwo = new Player(canvasElement,3,canvasElement.width-20);

  function movePlayers(e){
    if (e.keyCode == 87){
      playerOne.update(-2);
    }
    if (e.keyCode == 83){
      playerOne.update(2);
    }
    if (e.keyCode == 38){
      playerTwo.update(-2);
    }
    if (e.keyCode == 40){
      playerTwo.update(2);
    }

  }
 document.addEventListener("keydown",movePlayers);

// enlace a pagina GAME
  const game = new Game(canvasElement, playerOne, playerTwo);

  // Win / Lose / Equal
  game.gameOverCallback(buildGameOver);

  game.start();


  }

  const buildGameOver = () =>{
    buildDom(`<div class="game-intro">
    <p>GAME OVER</p>
    <img src="./img/logo2.png" alt="Loser" class="logo-img" />
    <br />
    <button class="restart">Restart</button>
  </div>`);

    const restartButton = document.querySelector(".restart");
    restartButton.addEventListener("click", buildGame)
  };

  buildScreen();
  
 };

 // aqui podría intentar poner el refrescar pestaña segun la plataforma
 window.addEventListener("load", main)
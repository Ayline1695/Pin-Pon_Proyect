"use-strict"

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

// enlace a pagina GAME
  const game = new Game(canvasElement);

  // Win / Lose / Equal
  game.gameOverCallback(buildGameOver);

  game.start();

  // probar con esto, e ir probando despues con lo hecho
 //const setPlayerDirection = (event) => {
 //  if (event.code === "ArrowUp") {
 //    game.player.setDirection(-1);
 //  } else if (event.code === "ArrowDown") {
 //    game.player.setDirection(1);
 //  }
 //};

 //document.addEventListener("keydown", setPlayerDirection);

 

  }

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
  
 };

 // aqui podría intentar poner el refrescar pestaña segun la plataforma
 window.addEventListener("load", main)
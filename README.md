# Pin-Pon

## Description
El [tenis de mesa o ping pong](https://es.wikipedia.org/wiki/Tenis_de_mesa) es un juego de mesa que se disputa entre dos jugadores o dos parejas.
El objetivo en este juego, es conseguir superar o igualar la puntuación en cada nivel.

## MVP (DOM - CANVAS)
El jugador podrá moverse en 2 direcciones (arriba y abajo), tendrá que acertar una cantidad igual o superior al minimo requerido.
El juego se acaba cuando haya pasado el tiempo minimo 1 min.
El jugador ganará siempre que haya superado al contrario
El jugador perderá si le gana el contrincante.
Los jugadores pueden acabar en empate.

## Data structure
1. index.html
2. style.scss
3. style.css
4. main.js
5. game.js
6. players.js
7. ball.js

### 1. index.html file

### 2. / 3. styles scss/css

### 4. Main file

- Dom
- startScreen / remStartScreen
- screenGame / remScreenGame
- loserScreen / remLoserScreen
- winScreen / remWinScreen
- deadHeadlScreen / remDeadHeadScreen
- startGameScreen / endGameScreen

### 3. Game Constructor

**Properties**
- canvas
- context
- player1/player2
- name
- ball
- gameOver
- gameWon
- gameDeadHead
- loopCount
- time limit

**Methods**
- start
- sartTime
- checkCollisionBall
- restartBallPosition
- movementBar
- checkTime
- win
- won/over/deadHead
- print points
- print time

### 4. Players Constructor

**Properties**
- canvas
- context
- x position
- y position
- width
- height
- points
- direction

**Methods**
- draw
- move
- collisionBall
- outOfScreen
- removepoints
- addPoints

### 5. Ball

**Properties**
- canvas
- context
- x position/transition
- y position/transition
- width
- height
- speed
- direction

**Methods**
- draw
- move

## States and States Transitions
- screenStart
    - Start the game
    - Start the game when click the button "start"
- screenGame
    - Game running while time is not exceeded
    - Go to loserScreen if the player score is lower than the other player
    - Go to winScreen if the player's's score is higher than the other player
    - Go to deadHeadlScreen if both have the same points
- loserScreen / winScreen / deadHeadScreen
    - Shows the message "loser!"/"DeadHead"/"Winner"
    - Show the Restart button and go back to screenGame

## Tasks
- Setup git & GitHub
- Create and connect files
- Build Dom
- Create the screens
- Create Constructors
- Move players
- Move the ball
- Check collisions
- Check game results
- Print the time

## Backlog
- Time limit = 1 min
- Usernames
- Background colors
- Speed ball
- Sounds
- Mobility of the bars

## Links

### Figma
[Link url](https://www.figma.com/file/j64FvDXNzdW7LAD4OX6DMZ/Untitled?node-id=2%3A13)

### Git
[Link Repo](https://github.com/Ayline1695/Proyect1)



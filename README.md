# Pin-Pon

## Description
The [Table tennis o ping pong](https://es.wikipedia.org/wiki/Tenis_de_mesa)  is a sport in which two or four players hit a lightweight ball.
The objective in this game, is to be able to overcome or equal the score in each level.

## MVP (DOM - CANVAS)
The player can move in 2 direction (up/down)
He must score an amount equal to or greater than the minimum required
The game will finish when the time is over (1 min)
The player will win always his amount was greater than the opponent.
The player loses if the opponent have a greater amount.
Players can end in a dead heat, if at the end of time they have the same amount of points.

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
- deadHeatlScreen / remDeadHeatScreen
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
- gameDeadHeat
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
- won/over/deadHeat
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
- loserScreen / winScreen / deadHeatScreen
    - Shows the message "loser!"/"DeadHeat"/"Winner"
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

### Trello
[Link url](https://trello.com/invite/b/u7Dv7hXg/5bfd385146564da42624c796dfb5ad62/proyecto-1)

### Figma
[Link url](https://www.figma.com/file/j64FvDXNzdW7LAD4OX6DMZ/Untitled?node-id=2%3A13)

### Git
[Link Repo](https://github.com/Ayline1695/Proyect1)



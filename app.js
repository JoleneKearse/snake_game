import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById("game-board")

// set up game loop, to constantly update positions & do calculations
function main(currentTime) {
    if (gameOver) {
        // reset game
        if (confirm("You lost! Press 'OK' to restart.")) {
            window.location = "https://jolenekearse.github.io/snake_game/"
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime

    update() 
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    // add ability to lose game
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
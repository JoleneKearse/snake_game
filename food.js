import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition() 
// to keep snake from just passing by food...
const EXPANSION_RATE = 1 // how much the snake grows after eating the food

export function update() {
    // check if snake is on top of food & can therefore eat it
    if (onSnake(food)) {
        // code to expand the snake
        expandSnake(EXPANSION_RATE)
        // then set the food to a new position
        food = getRandomFoodPosition() 
    }
}

export function draw(gameBoard) {
    // creates the food element on the board
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
}

// randomize food position
function getRandomFoodPosition() {
    // will give new position & make sure it's not already on the snake
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
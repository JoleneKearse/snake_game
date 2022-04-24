import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 3
const snakeBody = [{x:11, y:11}]
let newSegments = 0

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    // for the body of the snake. As we start out with 3 segments, we subtract 2 to just get the body
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        // move each segment to where it's parent was
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    // for the head of the snake, move based on where it's moving
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
}

// functions to handle interaction with food
export function expandSnake(amount) {
    // create new variable on line 5, with the value at 0, as at default it's not growing
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    // will determine if passed position is on the snake
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        // compare segment position & position to see if they are equal
        return equalPositions(segment, position)
    })
}


// functions to make losing game possible
export function getSnakeHead() {
    // for use with outsideGrid() to end game whenever snake's head leaves the grid
    return snakeBody[0]
}

export function snakeIntersection() {
    // find if snake's head is touching any of it's other body parts
    return onSnake(snakeBody[0], { ignoreHead: true })
    // BUT it would always detect that the head of the snake is touching the head of the snake, so need to make it ignore the head with ignoreHead option passed to onSnake
}


// supporting functions
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    // loop through all segments 
    for (let i = 0; i < newSegments; i++) {
        // duplicate last element of snake & add it to the end
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    // to prevent it from continuously expanding
    newSegments = 0
}
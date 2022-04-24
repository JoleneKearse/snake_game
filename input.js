let inputDirection = {x: 0, y: 0}  // initial value
let lastInputDirection = {x: 0, y: 0}
const up = document.querySelector(".up")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const down = document.querySelector(".down")

// set up code to modify inputDirection on key presses
window.addEventListener("keydown", e => {
    // use a switch statement based on e.key
    switch(e.key) {
        case "ArrowUp":
            // if statement prevents reversing
            if (lastInputDirection.y != 0) break
            // move up by one
            inputDirection = {x: 0, y: -1}
            break
        case "ArrowDown":
            if (lastInputDirection.y != 0) break
            inputDirection = {x: 0, y: 1}
            break
        case "ArrowLeft":
            if (lastInputDirection.x != 0) break
            inputDirection = {x: -1, y: 0}
            break
        case "ArrowRight":
            if (lastInputDirection.x != 0) break
            inputDirection = {x: 1, y: 0}
            break
    }
})

// set up input for mobile devices
up.addEventListener("click", () => (inputDirection = {x: 0, y: -1}))
left.document.addEventListener("click", () => (inputDirection = {x: -1, y: 0}))
right.document.addEventListener("click", () => (inputDirection = {x: 1, y: 0}))
down.document.addEventListener("click", () => (inputDirection = {x: 0, y: 1}))

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}
let inputDirection = { x: 0, y: 0 }; // initial value
let lastInputDirection = { x: 0, y: 0 };
const button = document.querySelectorAll(".button");

// set up code to modify inputDirection on key presses
window.addEventListener("keydown", (e) => {
    // use a switch statement based on e.key
    switch (e.key) {
        case "ArrowUp":
            // if statement prevents reversing
            if (lastInputDirection.y != 0) break;
            // move up by one
            inputDirection = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (lastInputDirection.y != 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (lastInputDirection.x != 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (lastInputDirection.x != 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
    }
});

// set up input for mobile devices
button.forEach((ele) => {
    ele.addEventListener("click", function handleClick(event) {
        if (ele.classList.contains("up")) {
            console.log("up clicked");
            inputDirection = { x: 0, y: -1 };
        } else if (ele.classList.contains("down")) {
            console.log("down clicked");
            inputDirection = { x: 0, y: 1 };
        } else if (ele.classList.contains("left")) {
            console.log("left clicked");
            inputDirection = { x: -1, y: 0 };
        } else if (ele.classList.contains("right")) {
            console.log("right clicked");
            inputDirection = { x: 1, y: 0 };
        }
    });
});

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

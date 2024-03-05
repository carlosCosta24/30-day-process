const body = document.querySelector("body")
const center = document.querySelector(".center-area")
const screen = document.querySelector(".screen")
const codeArea = document.querySelector(".screen-code")

body.addEventListener("keypress", (e) => {
    screen.textContent = `you pressed  ${e.key}`
    codeArea.textContent = `${e.keyCode}`
})
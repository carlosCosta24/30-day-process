const body = document.querySelector("body")
const center = document.querySelector(".center-area")
const screen = document.querySelector(".screen")
const codeArea = document.querySelector(".screen-code")

body.addEventListener("keypress", (e) => {

    screen.textContent = `you pressed  ${e.code}`

    codeArea.textContent = `${e.keyCode}`

})

{
    body.style.display = "flex"
    body.style.flexDirection = "column"
    body.style.flexWrap = "wrap"
    body.style.alignContent = "center"
    body.style.justifyContent = "center"
    body.style.alignItems = "center"
}
{
    screen.style.display = "flex"
    screen.style.width = "200px"
    screen.style.flexDirection = "row"
    screen.style.alignContent = "center"
    screen.style.alignItems = "center"
    screen.style.justifyContent = "center"
    screen.style.flexWrap = "wrap"
    screen.style.height = "200px"
    screen.style.border = "4px solid #ed2323"
    screen.style.borderRadius = "20px"
}

{
    codeArea.style.display = "flex"
    codeArea.style.width = "80px"
    codeArea.style.height = "80px"
    codeArea.style.border = "4px solid green"
    codeArea.style.borderRadius = "20px"
    codeArea.style.alignItems = "center"
    codeArea.style.justifyContent = "center"
    codeArea.style.margin = "10px"
    codeArea.style.padding = "10px"

}
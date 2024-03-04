const body = document.querySelector("body")
const inputBox = document.querySelector(".input-box")
const button = document.querySelector("button")
const massage = document.querySelector(".input-massage")
const numBox = document.querySelector(".number-box")
const actionArea = document.querySelector(".action-area")
const projectName = document.querySelector(".name")

//functions
button.addEventListener("click", () => {
    let input = inputBox.value
    let number = parseInt(input)

    if (isNaN(number)) {
        massage.textContent = "please input a number !"
    } else {
        numBox.innerHTML = " "
        for (let y = 0; y < input; y++) {
            let box = document.createElement("span")
            box.textContent = y
            box.style.display = "flex"
            box.style.width = "40px"
            box.style.height = "40px"
            box.style.flexDirection = "row"
            box.style.alignContent = "center"
            box.style.flexWrap = "wrap"
            box.style.justifyContent = "center"
            box.style.alignItems = "center"
            box.style.color = "white"
            box.style.borderRadius = "20px"

            numBox.append(box)
            if (isPrime(y)) {
                box.style.background = "green"
            }
            else if (y % 2 == 0) {
                box.style.background = "red"
            } else if (y % 2 !== 0) {
                box.style.background = "blue"
            }
        }
        body.append(numBox)
    }

    function isPrime(num) {
        if (num <= 1) {
            return false
        } else {
            for (let x = 2; x <= Math.sqrt(num); x++) {
                if (num % x === 0) {
                    return false
                }
            }
        }
        return true

    }

})

//styling body
body.style.display = "flex"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.alignContent = "center"
body.style.justifyContent = "center"
body.style.alignItems = " center"
body.style.flexWrap = " wrap"
body.style.height = "auto"
body.style.width = "auto"
body.style.margin = "50px"

//name section
projectName.style.fontSize = "30px"

//actionArea
actionArea.style.display = "flex"
actionArea.style.flexDirection = "column"
actionArea.style.gap = "20px"
actionArea.style.alignItems = "center"
actionArea.style.margin = "10px"
actionArea.style.padding = "10px"
actionArea.style.fontSize = "30px"
actionArea.style.color = "red"

//numBox
numBox.style.display = "flex"
numBox.style.flexDirection = "row"
numBox.style.flexWrap = "wrap"
numBox.style.alignContent = "center"
numBox.style.justifyContent = "flex-start"
numBox.style.alignItems = "center"
numBox.style.gap = "10px"
numBox.style.height = "auto"
numBox.style.width = "600px"
numBox.style.margin = "20px"
numBox.style.padding = "10px"

//inputBox
inputBox.style.width = "600px"
inputBox.style.height = "30px"
inputBox.style.padding = "5px"
inputBox.style.borderRadius = "20px"
inputBox.style.border = "2px solid green"
inputBox.style.outline = "none"
inputBox.style.textAlign = "center"
inputBox.style.fontSize = "30"


//button
button.style.width = "100px"
button.style.height = "36px"
button.style.borderRadius = "20px"
button.style.backgroundColor = "rebeccapurple"
button.style.color = "white"
button.style.fontSize = "20px"
button.style.alignItems = "center"
button.style.justifyContent = "center"
button.style.display = "inline-flex"




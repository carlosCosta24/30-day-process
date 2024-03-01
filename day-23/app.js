const body = document.querySelector("body")
const inputBox = document.querySelector(".input-box")
const button = document.querySelector("button")
const massage = document.getElementsByClassName("input-massage")
const numBox = document.querySelector(".number-box")

//functions



button.addEventListener("click", () => {
    let input = inputBox.value
    let number = parseInt(input)

    if (isNaN(number)) {
        alert("please input a number")
    } else {

        for (let y = 0; y < input; y++) {
            let box = document.createElement("span")
            box.textContent = y
            numBox.append(box)
        }
        body.append(numBox)
    }

})


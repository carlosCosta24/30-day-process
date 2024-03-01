const body = document.querySelector("body")
const inputBox = document.querySelector(".input-box")
const button = document.querySelector("button")
const massage = document.querySelector(".input-massage")
const numBox = document.querySelector(".number-box")

//functions



button.addEventListener("click", () => {
    let input = inputBox.value
    let number = parseInt(input)

    if (isNaN(number)) {
        massage.textContent = "please input a number ya m3rs"


    } else {
        numBox.innerHTML = " "
        for (let y = 0; y < input; y++) {
            let box = document.createElement("span")
            box.textContent = y
            numBox.append(box)
        }
        body.append(numBox)
    }

})


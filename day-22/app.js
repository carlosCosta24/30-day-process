//Exercises: Level 1
//Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
const body = document.getElementsByTagName("body")[0]
const container = document.getElementsByClassName("container")[0]

body.style.display = "flex"
body.style.flexDirection = "column"


container.style.display = " flex"
container.style.flexDirection = "column"
container.style.width = "965px"
container.style.height = "800px"
container.style.gap = "5px"
container.style.flexWrap = "wrap"






for (let t = 0; t <= 100; t++) {
    let numberDiv = document.createElement("div")
    numberDiv.textContent = t
    container.appendChild(numberDiv)
    numberDiv.style.width = " 60px"
    numberDiv.style.height = " 60px"
    numberDiv.style.display = "flex"
    if (t % 2 == 0) {

        numberDiv.style.backgroundColor = "green"
    } else if (t % 2 !== 0) {
        numberDiv.style.backgroundColor = "yellow"
    }


}

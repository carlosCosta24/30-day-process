//Exercise: Level 1
//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstP = document.querySelector('p')
console.log(firstP)
//Get each of the the paragraph using document.querySelector('#id') and by their id
const paragraphId_1 = document.querySelector("#first-title")
const paragraphId_2 = document.querySelector("#second-title")
const paragraphId_3 = document.querySelector("#third-title")
const paragraphId_4 = document.querySelector("#fourth-title")

console.log(paragraphId_1, paragraphId_2, paragraphId_3)

//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const pNode = document.querySelectorAll("p")
console.log(pNode)
//Loop through the nodeList and get the text content of each paragraph
for (let n = 0; n < pNode.length; n++) {
    console.log(pNode[n].textContent)

}

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphId_4.textContent = "Fourth Paragraph";

//Set id and class attribute for all the paragraphs using different attribute setting methods

for (let r = 0; r < pNode.length; r++) {
    pNode[r].setAttribute('class', 'paragraph')
    pNode[r].setAttribute('id', `paragraph-number-${r}`)
}

// Exercise: Level 2

//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

paragraphId_1.style.color = "red"
paragraphId_2.style.backgroundColor = "red"
paragraphId_3.style.border = "2px solid red"
paragraphId_4.style.fontSize = "30px"
paragraphId_4.style.fontFamily = "san serif"


//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

for (let t = 0; t < pNode.length; t++) {
    if (t % 2 === 0) {
        pNode[t].style.color = "red"
    } else {
        pNode[t].style.color = "green"
    }
}

//Set text content, id and class to each paragraph

for (let f = 0; f < pNode.length; f++) {

    pNode[f].textContent = `i am the paragraph number ${f} `
    pNode[f].setAttribute("class", `p-${f}`)
    pNode[f].setAttribute("id", `p-number-${f}`)

}






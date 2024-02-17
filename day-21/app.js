//Exercise: Level 1
//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstP = document.querySelector('p')
console.log(firstP)
//Get each of the the paragraph using document.querySelector('#id') and by their id
const paragraphId_1 = document.querySelector("#first-title")
const paragraphId_2 = document.querySelector("#second-title")
const paragraphId_3 = document.querySelector("#third-title")

console.log(paragraphId_1, paragraphId_2, paragraphId_3)

//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const pNode = document.querySelectorAll("p")
console.log(pNode)
//Loop through the nodeList and get the text content of each paragraph
for (let n = 0; n < pNode.length; n++) {
    console.log(pNode[n].textContent)

}

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph

const body = document.querySelector('body')
const container = document.querySelector('.container')
const sentence = document.querySelector('.sentence')
const fancyColors = ["#FFD700", "#FF1493", "#00FFFF", "#BA55D3", "#FF4500", "#9400D3", "#00CED1", "#ADFF2F", "#FF6347", "#8A2BE2", "#32CD32", "#4169E1", "#FF8C00", "#800080", "#20B2AA"];
const fancyFonts = ["Montserrat", "Roboto Condensed", "Lobster", "Pacifico", "Oswald", "Raleway", "Playfair Display", "Open Sans", "Poppins", "Cormorant Garamond", "Quicksand", "Merriweather", "Amatic SC", "Ubuntu", "Cinzel"];
const fancyFontSizes = ["64px", "72px", "80px", "96px", "120px"];


let animation = () => {
    let rand = Math.floor(Math.random() * 15)
    container.style.backgroundColor = fancyColors[rand]
    sentence.style.fontFamily = `${fancyFonts[rand]}`
    sentence.style.fontSize = fancyFontSizes[rand]
    let sentenceArray = Array.from(sentence.textContent)
    sentence.innerHTML = ''
    for (let s = 0; s < sentenceArray.length; s++) {
        let randColor = Math.floor(Math.random() * 15)
        let span = document.createElement('span')
        span.textContent = sentenceArray[s]
        span.style.color = fancyColors[randColor]
        sentence.appendChild(span)
    }



}

setInterval(() => { animation() }, 1000);

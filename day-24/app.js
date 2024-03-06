const inputArea = document.querySelector(".input-field")
const optionList = document.querySelector(".option-list")
const button = document.querySelector(".action-button")
const resultSection = document.querySelector(".result-section")
const options = document.querySelectorAll("option")
const resultDiv = document.querySelector(".result-div")
const plantImge = document.querySelector(".plant-imge")
const result = document.querySelector(".result")



button.addEventListener("click", massCalculation = () => {
    let value = parseInt(inputArea.value)
    if (isNaN(value)) {
        resultDiv.innerHTML = " "
        resultSection.innerHTML = " "
        resultSection.textContent = "please enter a number"
        resultDiv.append(resultSection)
        console.log(value)
    } else {
        let theMass
        let theImageSource
        let selectedPlant = options.textContent
        console.log(selectedPlant)
        switch (selectedPlant) {
            case "earth":
                selectedPlant.toLocaleLowerCase() == "earth"
                theMass = value * 8.9
                theImageSource = "/day-24/images/earth.png"
                break
            case "jupiter":
                selectedPlant.toLocaleLowerCase() == "jupiter"
                theMass = value * 24.79
                theImageSource = "/day-24/images/jupiter.png"
                break
            case "mars":
                selectedPlant.toLocaleLowerCase() == "mars"
                theMass = value * 3.721
                theImageSource = "/day-24/images/mars.png"
                break
            case "mercury":
                selectedPlant.toLocaleLowerCase() == "mercury"
                theMass = value * 3.7
                theImageSource = "/day-24/images/mercury.png"
                break
            case "pluto":
                selectedPlant.toLocaleLowerCase() === "pluto"
                theMass = value * 0.62
                theImageSource = "/day-24/images/pluto.png"
                break
            case "saturn":
                selectedPlant.toLocaleLowerCase() === "saturn"
                theMass = value * 10.44
                theImageSource = "/day-24/images/saturn.png"
                break
            case "moon":
                selectedPlant.toLocaleLowerCase() === "moon"
                theMass = value * 1.62
                theImageSource = "/day-24/images/moon.png"
                break
            case "neptune":
                selectedPlant.toLocaleLowerCase() === "neptune"
                theMass = value * 11.15
                theImageSource = "/day-24/images/neptune.png"
                break
            case "uranus":
                selectedPlant.toLocaleLowerCase() === "uranus"
                theMass = value * 8.69
                theImageSource = "/day-24/images/uranus.png"
                break
            case "venus":
                selectedPlant.toLocaleLowerCase() === "venus"
                theMass = value * 8.87
                theImageSource = "/day-24/images/venus.png"
            default:
                theMass = value * 8.9
                theImageSource = "/day-24/images/earth.png"
                break;
        }
        result.textContent = `${theMass} N`
        plantImge.setAttribute("src", theImageSource)
        resultDiv.append(resultSection)
        resultDiv.append(plantImge)

    }
})



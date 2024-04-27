const body = document.querySelector('body')
const header = document.querySelector('header')
const inputSection = document.querySelector('.input-section')
const addPlayer = document.querySelector('.add-player')
const board = document.querySelector('.board')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const score = document.querySelector('.score')

//body.addEventListener('click', () => { body.style.background = 'black', console.log('a7aa') })

const handelAdd = () => {
    if (firstName.value === '' || lastName.value === '' || score === '' || score !== Number) {
        alert('all felids are required ')
    } else {
        let ticket = document.createElement("div")
        let fName = document.createElement("div")
        let LName = document.createElement("div")
        let country = document.createElement("div")
        let ticketScore = document.createElement("div")
        let deleteButton = document.createElement("div")
        let addScore = document.createElement("button")
        let subScore = document.createElement("button")

        ticket.classList.add('ticket')



    }


}
addPlayer.addEventListener('click', handelAdd)
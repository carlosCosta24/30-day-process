const body = document.querySelector('body')
const header = document.querySelector('header')
const inputSection = document.querySelector('.input-section')
const addPlayer = document.querySelector('.add-player')
const board = document.querySelector('.board')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const score = document.querySelector('.score')
const country = document.querySelector('.country')





//body.addEventListener('click', () => { body.style.background = 'black', console.log('a7aa') })

const handelAdd = () => {
    if (firstName.value == '' || lastName.value == '' || score.value == '' || isNaN(score.value)) {
        alert('all felids are required ')
    } else {
        let ticket = document.createElement("div")
        ticket.classList.add('ticket')
        ticket.innerHTML = `<div class="fName">${firstName.value}</div> <div class="lName">${lastName.value}</div> <div class="country">${country.value}</div><div class="ticket-score">${score.value}</div> <button>deleteButton</button> <button>+5</button> <button>-5</button>`
        board.append(ticket)

    }


}
addPlayer.addEventListener('click', handelAdd)
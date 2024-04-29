const body = document.querySelector('body')
const header = document.querySelector('header')
const inputSection = document.querySelector('.input-section')
const addPlayer = document.querySelector('.add-player')
const board = document.querySelector('.board')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const score = document.querySelector('.score')
const country = document.querySelector('.country')



const handelAdd = () => {
    if (firstName.value == '' || lastName.value == '' || score.value == '' /*|| isNaN(score.value)*/) {
        alert('all felids are required ')
    } else {
        let ticket = document.createElement("div")
        ticket.classList.add('ticket')
        ticket.innerHTML = `<div class="info">
        <div class="fName">${firstName.value}</div> <div class="lName">${lastName.value}</div> <div class="country">${country.value}</div><div class="ticket-score">${score.value}</div></div>
        <div class="action"><button class="del">d</button> <button class="add">+5</button> <button class="sub">-5</button></div>`
        board.append(ticket)

    }

}


addPlayer.addEventListener('click', handelAdd)
if (board.querySelector('.ticket') !== null) {
    //action buttons
    const deleteButton = document.querySelector('.del')
    const addButton = document.querySelector('.add')
    const subButton = document.querySelector('.sub')

    deleteButton.addEventListener('click', (e) => { console.log(e.target) })
}
// addButton.addEventListener('click',)
// subButton.addEventListener('click',)
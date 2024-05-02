const body = document.querySelector('body')
const addPlayer = document.querySelector('.add-player')
const board = document.querySelector('.board')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const score = document.querySelector('.score')
const country = document.querySelector('.country')




const handelAdd = () => {
    if (firstName.value == '' || lastName.value == '' || country.value == '' || score.value == '' || isNaN(score.value)) {
        firstName.style.border = '2px solid red'
        lastName.style.border = '2px solid red'
        score.style.border = '2px solid red'
        country.style.border = '2px solid red'
        alert('all felids are required ')
    } else {
        firstName.style.border = ""
        lastName.style.border = ""
        score.style.border = ""
        country.style.border = ""

        let ticket = document.createElement("div")
        ticket.classList.add('ticket')
        ticket.innerHTML = `<div class="info">
        <div class="fName">${firstName.value}</div> <div class="lName">${lastName.value}</div> <div class="country">${country.value}</div><div class="ticket-score">${score.value}</div></div>
        <div class="action"><button class="del">d</button> <button class="add">+5</button> <button class="sub">-5</button></div>`
        board.append(ticket)
        ticket.querySelector('.del').addEventListener('click', deleteItem)
        ticket.querySelector('.add').addEventListener('click', addItem)
        ticket.querySelector('.sub').addEventListener('click', subItem)

        sortBoard()
    }

}
const deleteItem = (e) => {

    e.target.closest('.ticket').remove()

}
const addItem = (e) => {
    let ticket = e.target.closest('.ticket')
    let currentScore = ticket.querySelector('.ticket-score')
    let newScore = parseInt(currentScore.textContent)
    let updated = newScore + 5
    currentScore.textContent = updated
    sortBoard()



}
const subItem = (e) => {
    let ticket = e.target.closest('.ticket')
    let currentScore = ticket.querySelector('.ticket-score')
    let newScore = parseInt(currentScore.textContent)
    if (newScore >= 5) {

        let updated = newScore - 5
        currentScore.textContent = updated
    }
    else {
        currentScore.textContent = newScore

    }
    sortBoard()



}
const sortBoard = () => {

    let tickets = document.querySelectorAll('.ticket')
    let ticketArray = Array.from(tickets)
    ticketArray.sort((a, b) => {
        let scoreA = parseInt(a.querySelector('.ticket-score').textContent)
        let scoreB = parseInt(b.querySelector('.ticket-score').textContent)
        return scoreB - scoreA

    })
    ticketArray.forEach(ticket => board.appendChild(ticket))

}


addPlayer.addEventListener('click', handelAdd)




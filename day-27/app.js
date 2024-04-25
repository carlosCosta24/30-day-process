const body = document.querySelector("body")
const liveBanner = document.querySelector('.live-banner')
const emoji = document.querySelector('.emoji')
const skill = document.querySelector('.skill')
const liveSkill = document.querySelector('.live-skill')


const keywords = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'Python',
    'Flask',
    'Scipy',

]
let titles = [
    ['🌱', 'Educator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator'],
    ['📔', 'Content Creator']
]
const liveMove = () => {
    const fancyColors = [
        "#ff69b4", // Hot Pink
        "#8a2be2", // Blue Violet
        "#ff4500", // Orange Red
        "#ff1493", // Deep Pink
        "#ff8c00", // Dark Orange
        "#9932cc", // Dark Orchid
        "#00ced1"  // Dark Turquoise
    ];
    let randomColor = fancyColors[Math.floor(Math.random() * 7)]
    let randomTitle = Math.floor(Math.random() * 5)
    let randomKeyWord = Math.floor(Math.random() * 11)

    liveBanner.style.backgroundColor = randomColor
    emoji.textContent = titles[randomTitle][0]
    skill.textContent = titles[randomTitle][1]
    liveSkill.textContent = keywords[randomKeyWord].toUpperCase()
    liveSkill.style.color = randomColor



}
setInterval(liveMove, 2000)
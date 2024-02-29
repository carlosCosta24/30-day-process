const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            ['🌱', 'Educator'],
            ['💻', 'Programmer'],
            ['🌐', 'Developer'],
            ['🔥', 'Motivator'],
            ['📔', 'Content Creator']
        ],
        qualifications: [
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asabeneh/',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com/Asabeneh',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: 'https://github.com/Asabeneh'
            },
            {
                social: 'DEV.to',
                fontawesomeIcon: '',
                url: 'https://dev.to/asabeneh'
            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            days: 30,
            status: 'Done',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            days: 30,
            status: 'Ongoing',
            questions: 'Above 500',
            projects: 'About 30',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
        },
        {
            name: '30 Days Of HTML & CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            days: 30,
            status: 'Coming',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Data Analysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Machine Learning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        }
    ]
}
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const dateObject = new Date()
const colorArray = [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta",
    "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
    "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue",
    "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine",
    "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen",
    "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid",
    "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff",
    "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown",
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna",
    "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue",
    "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke",
    "yellow", "yellowgreen"
]
const body = document.getElementsByTagName("body")[0]
const heading = document.createElement("h1")
const span = document.createElement("span")
const tittle = document.createElement("h3")
const date = document.createElement("div")
const list = document.createElement("ul")
const nameSection = document.createElement("div")
const iconSection = document.createElement("div")
const infoSection = document.createElement("p")
const skillsSection = document.createElement("ul")
const keyWordsSection = document.createElement("div")

//adding the content from the object
heading.innerText = asabenehChallenges2020.description + " " + dateObject.getFullYear()
span.innerText = months[dateObject.getMonth()] + " " + dateObject.getFullYear().toString().slice(2) + " " + dateObject.getUTCFullYear() + " : " + dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds()
tittle.textContent = asabenehChallenges2020.challengeSubtitle

body.appendChild(heading)
body.append(tittle)
body.append(span)

for (let r = 0; r < asabenehChallenges2020.challenges.length; r++) {
    let element = document.createElement("li")
    let listItem = document.createElement("details")
    let summary = document.createElement("summary")
    let status = document.createElement("p")
    listItem.textContent = asabenehChallenges2020.challenges[r].topics
    summary.textContent = asabenehChallenges2020.challenges[r].name
    status.textContent = asabenehChallenges2020.challenges[r].status
    element.appendChild(summary)
    element.appendChild(listItem)
    element.appendChild(status)
    list.append(element)
}

body.append(list)
nameSection.textContent = asabenehChallenges2020.author.firstName + asabenehChallenges2020.author.lastName
body.append(nameSection)

for (let r = 0; r < asabenehChallenges2020.author.socialLinks.length; r++) {
    let newIcon = document.createElement("span")
    newIcon.innerHTML = asabenehChallenges2020.author.socialLinks[r].fontawesomeIcon
    iconSection.appendChild(newIcon)

}

body.appendChild(iconSection)

infoSection.textContent = asabenehChallenges2020.author.bio
body.appendChild(iconSection)
body.appendChild(infoSection)


let allSkillsSection = document.createElement("div")
let theTitlesList = document.createElement("ul")
for (let s = 0; s < asabenehChallenges2020.author.titles.length; s++) {
    let listElement = document.createElement("li")
    listElement.textContent = asabenehChallenges2020.author.titles[s][0] + asabenehChallenges2020.author.titles[s][1]
    theTitlesList.appendChild(listElement)
    skillsSection.appendChild(theTitlesList)
    allSkillsSection.appendChild(skillsSection)
}
let theSkillList = document.createElement("ul")
for (let s = 0; s < asabenehChallenges2020.author.skills.length; s++) {
    let listElement = document.createElement("li")
    listElement.textContent = asabenehChallenges2020.author.skills[s]
    theSkillList.appendChild(listElement)
    allSkillsSection.appendChild(theSkillList)

}
let theQualificationList = document.createElement("ul")
for (let s = 0; s < asabenehChallenges2020.author.qualifications.length; s++) {
    let listElement = document.createElement("li")
    listElement.textContent = asabenehChallenges2020.author.qualifications[s]
    theQualificationList.appendChild(listElement)
    allSkillsSection.appendChild(theQualificationList)
}

body.append(allSkillsSection)

body.append(allSkillsSection)

let keysTittle = document.createElement("p")
keyWordsSection.appendChild(tittle)
for (let r = 0; r < asabenehChallenges2020.keywords.length; r++) {
    let elements = document.createElement("span")
    elements.classList.add("keys")
    tittle.textContent = "Keywords"
    elements.textContent = `# ${asabenehChallenges2020.keywords[r]}`
    keyWordsSection.appendChild(elements)
    body.append(keyWordsSection)
}

//setInterval(() => { year[0].style.color = colorArray[Math.floor(Math.random() * 49)] }, 1000)
setInterval(() => { span.style.backgroundColor = colorArray[Math.floor(Math.random() * 49)] }, 1000)


//styling the web page
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.alignItems = "center"
body.style.fontFamily = "cursive"

//tittle

tittle.style.textDecoration = "underline"

//list
list.style.display = "flex"
list.style.flexDirection = "column"
list.style.width = "540px"
list.style.listStyle = "none"




list.forEach(li => {

    li.classList.add("color-list")
})
let listLi = document.querySelectorAll(".color-list")
console.log(listLi)

for (let h = 0; h < listLi.length; h++) {
    listLi[h].style.display = "flex"
    listLi[h].style.flexDirection = "row"
    listLi[h].style.alignItems = "center"
    listLi[h].style.justifyContent = "space-around"

    if (listLi[h].textContent.includes("Done")) {

        listLi[h].style.backgroundColor = "green"

    } else if (listLi[h].textContent.includes("Ongoing")) {

        listLi[h].style.backgroundColor = "orange"

    } else {

        listLi[h].style.backgroundColor = "red"
    }
}
//icon section
iconSection.style.display = "flex"
iconSection.style.justifyContent = "center"
iconSection.style.alignItems = "center"
iconSection.style.gap = "20px"
iconSection.style.height = "50px"

//icons
const icons = document.getElementsByClassName("fab")
Array.from(icons).forEach(element => {
    element.style.zoom = "3"


})

//paragraph
infoSection.style.display = "flex"
infoSection.style.height = "80px"
infoSection.style.width = "600px"
infoSection.style.textAlign = "center"

//tittles
allSkillsSection.style.display = "flex"
allSkillsSection.style.alignItems = "center"





//keywords
keyWordsSection.classList.add("key-div")
let keyWordDiv = document.querySelector(".key-div")
keyWordDiv.style.backgroundColor = "#afafcb"
keyWordDiv.style.padding = "20px"
keyWordDiv.style.gap = "10px"
keyWordDiv.style.lineHeight = "35px"


//keys

let keysBackGround = document.querySelectorAll(".keys")
keysBackGround.forEach(element => {

    element.style.backgroundColor = `${colorArray[Math.floor(Math.random() * 30)]}`
    element.style.width = "30px"
    element.style.height = "20px"
    element.style.margin = "10px"
    element.style.borderRadius = "20px"
})











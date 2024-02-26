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
const body = document.getElementsByTagName("body")[0]
const heading = document.createElement("h1")
const span = document.createElement("span")
const tittle = document.createElement("h3")
const date = document.createElement("div")
const list = document.createElement("ul")
const nameSection = document.createElement("div")
const iconSection = document.createElement("div")
const infoSection = document.createElement("p")
const skillsSection = document.createElement("div")
const keyWordsSection = document.createElement("div")

//adding the content from the object
heading.innerText = asabenehChallenges2020.description
body.appendChild(heading)
span.innerText = new Date().getFullYear()
body.append(span)
tittle.textContent = asabenehChallenges2020.challengeSubtitle
body.append(tittle)
for (let r = 0; r < asabenehChallenges2020.challenges.length; r++) {
    let listItem = document.createElement("details")
    listItem.textContent = asabenehChallenges2020.challenges[r].topics
    list.appendChild(listItem)
}
body.append(list)
nameSection.textContent = asabenehChallenges2020.author.firstName + asabenehChallenges2020.author.lastName
body.append(nameSection)


for (let r = 0; r < asabenehChallenges2020.author.socialLinks.length; r++) {
    let newIcon = document.createElement("span")
    newIcon.textContent = asabenehChallenges2020.author.socialLinks[r].social
    iconSection.appendChild(newIcon)

}
body.appendChild(iconSection)


infoSection.textContent = asabenehChallenges2020.author.bio
body.appendChild(infoSection)



for (let s = 0; s < asabenehChallenges2020.author.titles.length; s++) {
    let theList = document.createElement("ul")
    let listElement = document.createElement("li")
    listElement.textContent = asabenehChallenges2020.author.titles[s]
    theList.appendChild(listElement)
    skillsSection.appendChild(theList)
    body.appendChild(skillsSection)
}
for (let s = 0; s < asabenehChallenges2020.author.skills.length; s++) {
    let theList = document.createElement("ul")
    let listElement = document.createElement("li")
    listElement.textContent = asabenehChallenges2020.author.skills[s]
    theList.appendChild(listElement)
    body.appendChild(theList)

}
for (let s = 0; s < asabenehChallenges2020.author.qualifications.length; s++) {
    let theList = document.createElement("ul")
    let listElement = document.createElement("li")
    listElement.textContent = asabenehChallenges2020.author.qualifications[s]
    theList.appendChild(listElement)
    body.appendChild(theList)
}

for (let r = 0; r < asabenehChallenges2020.keywords.length; r++) {
    let elements = document.createElement("span")
    elements.textContent = `#${asabenehChallenges2020.keywords[r]}`
    keyWordsSection.appendChild(elements)
    body.append(keyWordsSection)

}






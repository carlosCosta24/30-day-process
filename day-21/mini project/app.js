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
];
const parentList = document.querySelector("ul")
const year = document.getElementsByClassName("year")
const list = document.querySelectorAll("li")
const body = document.querySelector("body")
const mainTitle = document.querySelector("h2")


body.style.display = "flex"
body.style.flexDirection = "row"
body.style.justifyContent = "center"
mainTitle.style.display = "flex"
mainTitle.style.justifyContent = "center"
mainTitle.style.textDecoration = "underline"

setInterval(() => { year[0].style.color = colorArray[Math.floor(Math.random() * 49)] }, 1000)
setInterval(() => { dateAndTime.style.backgroundColor = colorArray[Math.floor(Math.random() * 49)] }, 1000)

//The date and time background color is changing every on seconds
parentList.style.listStyle = "none"

const date = new Date()
const dateAndTime = document.createElement("div")
dateAndTime.textContent = months[date.getMonth()] + " " + date.getFullYear().toString().slice(2) + " " + date.getUTCFullYear() + ":" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

mainTitle.style.display = "flex"
mainTitle.style.flexDirection = "column"
mainTitle.style.alignItems = "center"
dateAndTime.style.textDecoration = "none !important"
mainTitle.appendChild(dateAndTime)

//Completed challenge has background green
//Ongoing challenge has background yellow
//Coming challenges have background red
for (let o = 0; o < list.length; o++) {

    list[o].style.display = "flex"
    list[o].style.gap = "10px"
    list[o].style.margin = "10px"


    if (list[o].textContent.includes("Done")) {
        list[o].style.backgroundColor = "green"

    } else if (list[o].textContent.includes("Ongoing")) {
        list[o].style.backgroundColor = "yellow"
    } else {
        list[o].style.backgroundColor = "red"
    }
}





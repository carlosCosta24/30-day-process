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
const parentList = document.querySelector("ul")
const year = document.getElementsByClassName("year")
const list = document.querySelector("li")

setInterval(() => { year[0].style.color = colorArray[Math.floor(Math.random() * 49)] }, 1000)

year[0].style.fontSize = "60px"

//The date and time background color is changing every on seconds
parentList.style.listStyle = "none"
list.style.textDecoration = "underline"
list.style.fontSize = "30px"

const date = new Date()
const dateAndTime = document.createElement("div")
dateAndTime.textContent = `${date.getMonth() + 1}`
parentList.appendChild(dateAndTime)





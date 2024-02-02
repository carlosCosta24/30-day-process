localStorage.setItem('firstName', 'molto');
localStorage.setItem('age', 200);
console.log("///////////////////////////////////////////////////////////---------------------------------------------");


const skills = ['HTML', 'CSS', 'JS', 'React'];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem('skills', skillsJSON);
console.log(localStorage);
console.log("///////////////////////////////////////////////////////////---------------------------------------------");

let skillsObj = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
];

let skillObjJSON = JSON.stringify(skillsObj);
localStorage.setItem('skillsObj', skillObjJSON);

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skillsItem = localStorage.getItem('skills')
console.log(firstName, age, skills)

console.log("///////////////////////////////////////////////////////////---------------------------------------------");
localStorage.clear()
//Exercises: Level 1
//Store you first name, last name, age, country, city in your browser localStorage.
let myFirstName = "molto";
let myLastName = "rau";
let myAge = 98;
let myCountry = "brazil";
let myCity = "aracaju";

localStorage.setItem('myFirstName', myFirstName);
localStorage.setItem('myLastName', myLastName);
localStorage.setItem('myAge', myAge);
localStorage.setItem('myCountry', myCountry);
localStorage.setItem('myCity', myCity);

console.log(localStorage);
console.log("///////////////////////////////////////////////////////////---------------------------------------------");


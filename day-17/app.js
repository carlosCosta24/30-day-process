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
localStorage.clear()
//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
    myFirstName: "molto",
    myLastName: "rau",
    myAge: 60,
    myCountry: "brazil",
    myCity: "aracaju",
    skills: [
        { tech: 'HTML', level: 10 },
        { tech: 'CSS', level: 9 },
        { tech: 'JS', level: 8 },
        { tech: 'React', level: 9 },
        { tech: 'Redux', level: 10 },
        { tech: 'Node', level: 8 },
        { tech: 'MongoDB', level: 8 }
    ],

}

let parsed = JSON.stringify(student, undefined, 2);
localStorage.setItem("student", parsed);
console.log(localStorage);
console.log("///////////////////////////////////////////////////////////---------------------------------------------");

//Exercises: Level 3
//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, //addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


let personAccount = {
    firstName: "ana",
    lastName: "molto",
    incomes: { total: "100,000 $" },
    expenses: { total: "5000 $" },
    totalIncome() {
        return this.incomes[0];
    },
    totalExpense() {
        return this.expenses[0];

    },
    accountInfo() {
        return `name is: ${this.firstName}, last name is: ${this.lastName}, total income: ${this.incomes.total}, total expenses: ${this.expenses.total}`
    },
    addIncome() {
        return "nothing"
    },
    addExpense() {
        return "nothing"
    },
    accountBalance() { return `${parseInt(this.expenses.total) - parseInt(this.incomes.total)}` },

}
console.log(personAccount);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome());
console.log(personAccount.addExpense());
console.log(personAccount.accountBalance());


let stringfyed = JSON.stringify(personAccount, undefined, 4);
localStorage.setItem("account info ", stringfyed);
console.log(localStorage);
console.log("///////////////////////////////////////////////////////////---------------------------------------------");


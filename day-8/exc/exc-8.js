//Exercises: Level 1
//Create an empty object called dog
const dog = {
    name: "moltiano",
    legs: 4,
    color: "brown",
    age: 3,
    bark: function () {

        return "woof woof";
    },
};
//Print the the dog object on the console
console.log(dog);
//Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
//Set new properties the dog object: breed, getDogInfo
dog.breed = "golden";
dog.getDogInfo = function () {
    return `my name is ${this.name} i have ${this.legs} legs and i am ${this.age} years old`
};
console.log(dog.getDogInfo());
console.log("9867326790459836/***/");

//Exercises: Level 2
//Find the person who has many skills in the users object.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
function manySkills(users) {
    let maxLength = 0;
    for (const user in users) {
        const userSkills = users[user].skills;
        if (userSkills.length > maxLength) {
            maxLength = userSkills.length;
        }
    }
    return maxLength;
}
console.log(manySkills(users));
console.log("9867326790459836/***/");

//Count logged in users, count users having greater than equal to 50 points from the following object.

function loggedUser(users) {
    let loggedIn = 0;
    let totalPoint = 0;
    for (const user in users) {
        const userStatus = users[user].isLoggedIn;
        const userPoints = users[user].points;
        if (userStatus) {
            loggedIn += 1;
        }
        if (userPoints >= 50) {
            totalPoint += 1;
        }

    }
    return {

        loggedIn: loggedIn,
        totalPoint: totalPoint
    };

}
console.log(loggedUser(users));
console.log("9867326790459836/***/");

//Find people who are MERN stack developer from the users object
function findMernDeveloper() {
    let mernDeveloper = 0;
    for (const user in users) {
        const skills = users[user].skills;
        if (skills.includes("Node")) {
            mernDeveloper += 1;
        }
    }
    return mernDeveloper;
}

console.log(findMernDeveloper(users));
console.log("9867326790459836/***/");
//Set your name in the users object without modifying the original users object
function setMyName() {
    const theNewObject = Object.assign({}, users)
    theNewObject.myName = "molto";
    return theNewObject.myName;
}
console.log(setMyName())
console.log("9867326790459836/***/");
//Get all keys or properties of users object
const allKeys = Object.keys(users)
console.log(allKeys);
console.log("9867326790459836/***/");
//Get all the values of users object
function getAllValues(users) {
    for (const user in users) {
        const userData = users[user];
        console.log(`user: ${user}`);
        console.log("user data:", userData);
        console.log("---")
    }

}
console.log(getAllValues(users));
console.log("9867326790459836/***/");
//Use the countries object to print a country name, capital, populations and languages.
import { allCountries } from "./countries.js";
let countInfo = (allCountries) => {
    const data = [];
    for (const country in allCountries) {
        const countryData = allCountries[country];
        data.push(countryData.name);
        data.push(countryData.capital);
        data.push(countryData.population.toLocaleString());
        data.push(countryData.languages);
    }
    for (let o = 0; o < data.length; o += 4) {
        console.log("Name:", data[o]);
        console.log("Capital:", data[o + 1]);
        console.log("Population:", data[o + 2]);
        console.log("Languages:", data[o + 3]);
        console.log("-----------------------");
    }


}
console.log(countInfo(allCountries));
console.log("9867326790459836/***/");
//Exercises: Level 3
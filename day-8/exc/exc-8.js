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
//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: "molto",
    lastName: "michel",
    incomes: "1000$",
    expenses: "800$",
    totalIncome: function () {
        console.log(this.incomes);
    },
    totalExpense: function () {
        console.log(`my monthly expenses = ${this.expenses}`);
    }, accountInfo: function () {
        console.log(`account owner is: ${this.firstName} ${this.lastName},\ttotal expenses in the month is:${this.expenses}`)
    }
    , addIncome: function (newIncome) {
        this.addIncome = newIncome;

    }, addExpense: function (newExpenses) {
        this.addExpenses = newExpenses;

    },
    accountBalance: function () {
        if (this.addExpense == undefined && this.addIncome == undefined) {
            return `total balance is: ${this.incomes} `
        } else {
            return `total balance is: ${this.incomes + this.newIncome} `

        }

    }


}
console.log(personAccount);
console.log("9867326790459836/***/");
//Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const usersInfo = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];
//Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(usersInfo) {

    let userName = prompt("enter your username, please!");
    for (let i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].username.toLocaleLowerCase() == userName.toLocaleLowerCase()) {
            console.log("you already have an account !");
            return;
        }
    }
    console.log("nice to have you lets create a new user and password ");
}
//signUp(usersInfo);
//b. Create a function called signIn which allows user to sign in to the application
console.log("9867326790459836/***/");
function signIn(usersInfo) {
    let userName = prompt("enter your username, please!");
    for (let i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].username.toLocaleLowerCase() == userName.toLocaleLowerCase()) {
            console.log("you already have an account !");
            return;
        }
    }
    let newUserName = prompt("nice to have you lets create a new user Name: ");
    let newUserPassword = parseInt(prompt("nice to have you lets create a new user and password "));
    return console.log(`your newUserName is:${newUserName} your newPassword is: **************`);


}
//signIn(usersInfo);
console.log("9867326790459836/***/");
//The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
function rateProduct(products) {
    for (const element of products) {
        let theTotalRating = 0;
        let array = element.ratings;
        for (let h = 0; h < array.length; h++) {
            theTotalRating += element.ratings[h].rate;
        }
        console.log(`product name is: ${element.name} total ratings is: ${theTotalRating}`);
    }

}
rateProduct(products);
console.log("9867326790459836/***/");
function averageRating(products) {
    for (const element of products) {
        let totalRating = 0;
        let ratingArray = element.ratings;
        let timeRated = element.ratings.length;
        for (let r = 0; r < ratingArray.length; r++) {
            totalRating += element.ratings[r].rate;
        }
        console.log(`product name is: ${element.name} average ratings is: ${totalRating / timeRated}`);
    }
}
averageRating(products);
console.log("9867326790459836/***/");
//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(products) {
    for (const product of products) {
        if (product.likes.length > 0) {
            product.likes.pop();
        } else {
            product.likes.push("one like");
        }
    }
    return products;
}
console.log(likeProduct(products));
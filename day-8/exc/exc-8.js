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
console.log(dog.bark);
//Set new properties the dog object: breed, getDogInfo
dog.breed = "golden";
dog.getDogInfo = function () {
    return `my name is ${this.name} i have ${this.legs} legs and i am ${this.age} years old`
};
console.log(dog.getDogInfo());
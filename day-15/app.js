//Exercises Level 1
//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(type, name, age, color, legs) {
        this.name = name,
            this.age = age,
            this.color = color,
            this.legs = legs
        this.type = type
    }
    getDetails() {
        console.log(`this is a / an ${this.type}, his/ her name is ${this.name}, he is ${this.age} years old , he has a beautiful ${this.color} color`);
    };
    getLegs() {
        console.log(this.legs);
    }
}

const dog = new Animal("dog", "poalo", 3, "black", 4);

console.log(dog);
dog.getDetails();
dog.getLegs();

//Create a Dog and Cat child class from the Animal Class.

const cat = new Animal("cat", "santa", 2, "white", 4)
console.log(cat)
cat.getDetails();

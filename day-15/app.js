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

//Exercises Level 2
class Cat extends Animal {
    constructor(gender) {
        this.gender = gender;
    }


}

console.log(Cat)

//Exercises Level 3

//Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
    constructor(arr) {
        this.arr = arr;
    };
    count() {
        let length = this.arr.length;
        return length;
    };
    sum() {
        return this.arr.reduce((acc, cur) => {
            return acc + cur;
        });
    };
    min() {
        let sorted = this.arr.sort();

        return sorted[0];
    };
    max() {
        let sorted = this.arr.sort();

        return sorted[sorted.length - 1];
    };
    range() {
        let sorted = this.arr.sort();
        return sorted[sorted.length - 1] - sorted[0];
    };
    mean() {
        return Math.ceil(this.sum() / this.count());
    };
    median() {
        let length = this.arr.length;
        let sortedArray = this.arr.slice().sort((a, b) => a - b);

        if (length % 2 !== 0) {
            return sortedArray[Math.floor(length / 2)]
        } else {
            return sortedArray[length / 2];
        }
    };
    mode() {
        let sortedArr = this.arr.sort();
        for (let f = 0; f < sortedArr.length; f++) {
            let first = sortedArr[f + 1]

        }
    };

    var() {
        let theSquareArr = [];
        let mean = this.mean();
        this.arr.forEach(element => {
            let square = (element - mean) ** 2
            theSquareArr.push(square);
        });
        return theSquareArr.reduce((a, b) => {
            return a + b;
        }) / theSquareArr.length;
    };
    std() {
        return parseInt(Math.sqrt(this.var()));
    }



}

let stats = new Statistics(ages);
console.log('Count:', stats.count());
console.log('Sum:', stats.sum());
console.log('Min: ', stats.min());
console.log('Min: ', stats.max());
console.log('Range: ', stats.range());
console.log('Range: ', stats.mean());
console.log('Median: ', stats.median());
console.log('Variance: ', stats.var());
console.log('Standard Deviation:: ', stats.std());
// need to review and improve on
/*console.log('Frequency Distribution: ', statistics.freqDist())
console.log('Mode: ', stats.mode());
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}*/
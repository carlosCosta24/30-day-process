import { countries } from "../../day-5/exc/countries.js";
//Declare a function fullName and it print out your full name.
function myFullName() {
    let firstName = "molto";
    let secName = " 98";
    console.log(firstName + " " + secName)
}
myFullName();
console.log("*-*-*-*");
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(first, sec) {
    first = "molto"
    sec = "98"
    return first + " " + sec;
}
console.log(fullName());
console.log("*-*-*-*");
//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNum(num1 = "d5l rqm", numb2 = "ya m3rs") {

    return num1 + numb2;

}
console.log(addNum(5, 6));
console.log("*-*-*-*");
//An area of a rectangle is calculated as follows: area = length x width
function areaOfRectangle(length, width) {
    return length * width

}
console.log(areaOfRectangle(5, 6));
console.log("*+---++++-*-*-*");
//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width)

}
console.log(perimeterOfRectangle(9, 11));
console.log("*-*-*+--*");

function volumeOfRectPrism(length, width, height) {
    return length * width * height;

}
console.log(volumeOfRectPrism(9, 11, 5));
console.log("*-**//-*-*");

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    let pi = 3.14;
    return pi * r * r;
}
console.log(areaOfCircle(5));
console.log("*-*/*/*-*-*");
//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    let pi = 3.14;
    return 2 * pi * r;
}
console.log(circumOfCircle(5));
console.log("*-*/*/*-*-*");
//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density
function densityCalc(mass, volume) {
    return mass / volume;

}
console.log(densityCalc(10, 2));
console.log("*-*/*/*-*-*");
//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedCalc(distance, time) {
    return `speed = ${distance / time} m/s`;
}
console.log(speedCalc(10, 2));
console.log("*-*/*/*++++++++++-*-*");
//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightCalc(mass, gravity) {
    return mass * gravity;
}
console.log(weightCalc(10, 2));
console.log("*-*/*/*++++++++++-*-*");
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(temp) {
    return `${(temp * 9 / 5) + 32} f`;
}
console.log(convertCelsiusToFahrenheit(15));
console.log("*-*/*/*+++))))+++++++-*-*");
//need some edit
function bmiCalc(weight, height) {
    const BMI = weight * (height * height);
    let result;
    if (BMI < 18.5) {
        result == "you are underweight";
    } else if (BMI >= 18.5 || BMI <= 24.9) {
        result == "you have normal weight";
    } else if (BMI >= 25 || BMI <= 29.9) {
        result == " you are over weight";
    } else {
        result == "you are Obese";
    }
    return result;
}
console.log(bmiCalc(170, 1.70));
console.log("*-*/*/*+++))))+++++++-*-*");
function checkSeason(month) {
    if (month == "dec" || month == "jan" || month == "feb") {
        return "winter"
    } else if (month == "march" || month == "april" || month == "may") {
        return "spring"
    } else if (month == "sep" || month == "oct" || month == "nov") {
        return "autumn"
    } else {
        return "summer"
    }

}
console.log(checkSeason("sep"));
console.log("*-*/*/*+++))))+++++++-*-*");
function findMax() {
    let theMax = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > theMax) {
            theMax = arguments[i];
        }
    }
    return theMax;
}
console.log(findMax(0, -10, -30));
console.log("*-*/*/*+++))))+++++++-*-*");

//Exercises: Level 2

function solveLinEquation(a, b, c) {
    let result = (c + b) / a;
    //ax + by + c = 0;
    return result;

}
console.log(solveLinEquation(2, 5, 8));
console.log("*-*/*/*+++))))+++++++-*-*");
//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
    let result = (c + b) / a;
    //ax + by + c = 0;
    return result;

}
console.log(solveQuadEquation(2, 5, 8));
console.log("*-*/*/*+++))))+++++++-*-*");
//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function arrSum(arr) {
    let theSum = 0;
    for (let j = 0; j < arr.length; j++) {
        theSum += arr[j];
    }
    return theSum;
}
console.log(arrSum([1, 5, 8, 9, 4, 7, 2, 3]));
console.log("*-*/*/*+++))))++++++48676746874+-*-*");

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    return `${day}/${month}/${year} ${hour}:${minute}`;
}
console.log(showDateTime());
console.log("*-*/*/*+++))))+8585885+++++48676746874+-*-*");
//Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
    let x = b;
    let y = a;
    return `the first value is ${x}, and the seconde value is ${y}`;
}
console.log(swapValues(5, 7));
console.log("*-*/*/*+++))))+++++++-*-*");
//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    let temp = [];
    for (let k = arr.length - 1; k >= 0; k--) {
        temp.push(arr[k]);
    }
    return temp;
}
console.log(reverseArray([1, 2, 3, 6, 4, 5]));
console.log(reverseArray(["a", "s", "d", "f", "e", "r"]));
console.log("*-*/*/*+++(((((((((((((((())))))))))))))))))))+++++++-*-*");

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
    let temporary = [];
    for (let m = 0; m < arr.length; m++) {
        temporary.push(arr[m].toString().toUpperCase());
    }
    return temporary;
}
console.log(capitalizeArray(["f", "s", "v", "f", "e", "g"]));
console.log("*-*/*/*+++(())))))))))))))+++++++-*-*");
//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let arr = [];
function addItem(item) {
    arr.push(item);
    return arr;
}
console.log(addItem("/'/", 2));
console.log(addItem("as"));
console.log(addItem("ty"))
console.log("*-*/*/*+++(()))))))+++++++-*-*");
//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, arr) {
    return arr.splice(index, 1);
}
console.log(removeItem(5, [1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 3, 3]));
console.log("*-*/*/*+++(()))))))+++++++-*-*");
//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let sum = 0;
    for (let r = number; r >= 0; r--) {
        sum += r

    }
    return sum

}
console.log(sumOfNumbers(10))
console.log("*-*/*/*+++(()))))))+++++++-*-*");
//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n) {
    let oddSum = 0;
    for (let w = n; n >= 0; n--) {
        if (n % 2 !== 0) {
            oddSum += n;
        }

    }
    return oddSum;

}
console.log(sumOfOdds(15));
console.log("*-*/*/*+++(())+++-*-*");
//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(numbers) {
    let evenSum = 0;
    for (let t = numbers; t >= 0; t--) {
        if (t % 2 == 0) {

            evenSum += t;
        }
    }
    return evenSum
}
console.log(sumOfEven(10));
console.log("*-*/*/*+++-*-*");
function evensAndOdds(theNum) {
    let theOddSum = 0;
    let theEvenSum = 0;
    for (let i = theNum; i >= 0; i--) {
        if (i !== 0) {
            if (i % 2 == 0) {
                theEvenSum += i;
            } else if (i % 2 !== 0) {
                theOddSum += i;
            }
        }
    }
    return `the number of odds are ${theOddSum} \nthe number of even are ${theEvenSum}`
}
console.log(evensAndOdds(10));
console.log("*-*/*/*++//////////+-*-*");
//Write a function which takes any number of arguments and return the sum of the arguments
let theArrSum = function (...arg) {
    let theSum = 0;
    for (let y = 0; y < arg.length; y++) {
        theSum += arg[y];
    }
    return theSum;
}
let result = theArrSum(1, 2, 3, 8);
console.log(result);
console.log("*-*/*/*++//////////+-*-*");
//Writ a function which generates a randomUserIp.
const randomUserIP = () => {
    let firstPart = Math.floor(Math.random() * 200);
    let secPart = Math.floor(Math.random() * 190);
    let thirdPart = Math.floor(Math.random() * 100);
    let fourthPart = Math.floor(Math.random() * 60);

    return `${firstPart}.${secPart}.${thirdPart}.${fourthPart}`
}
console.log(randomUserIP());
console.log("*-*/*/*++//////////+-*-*");
//Write a function which generates a randomMacAddress
const randomMacAddress = () => {
    const charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let randomChar = Math.floor(Math.random() * 27);
    let randNum = Math.floor(Math.random() * 9);
    return `${numArr[randNum]}${numArr[randNum] + 2}: ${numArr[randNum] + 1}${charArr[randomChar]} : ${numArr[randNum]}${numArr[randNum] + 2} : ${charArr[randomChar]}${charArr[randomChar]} : ${charArr[randomChar]}${charArr[randomChar]} : ${charArr[randomChar]}${charArr[randomChar]}`
}
console.log(randomMacAddress());
console.log("*-*/*/*++//////////+-*-*");
//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = () => {
    let varArr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let rand = Math.floor(Math.random() * 15);
    return `#${varArr[rand - 1]}${varArr[rand + 1]}${varArr[rand + 2]}${varArr[rand - 2]}${varArr[rand + 3]}${varArr[rand - 3]}`;
}
console.log(randomHexaNumberGenerator());
console.log("*-*/*/*++//////////+-*-*");
//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = () => {
    let theArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let rand = Math.floor(Math.random() * 15);
    return `${theArr[rand + 2]}${theArr[rand + 3]}${theArr[rand + 4]}${theArr[rand + 1]}${theArr[rand + 5]}${theArr[rand + 4]}${theArr[rand - 3]}`;
}
console.log(userIdGenerator());
console.log("*-*/*/*++//////////+-*-*");
//Exercises: Level 3
function userIdGeneratedByUser() {
    //very important to review and understand
    let theArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let idAmount = Number(prompt('please enter the number of th id / id\'s you want'));
    let charPerId = Number(prompt('please enter the number of character per id '));
    let temp = [];
    for (let i = 0; i < idAmount; i++) {
        let theReq = [];
        for (let j = 0; j < charPerId; j++) {

            let theRand = Math.floor(Math.random() * theArr.length);
            theReq.push(theArr[theRand]);
        }
        // theReq.push(theArr[theRand]);
        // theReq.length = 0;
        // if(theReq[i].length !== charPerId){

        // }
        temp.push(theReq.join(''));
    }

    for (let a = 0; a < temp.length; a++) {
        console.log(`${temp[a]}\t`)
    }
    return 'etfdl ya m7trm idhatk'

}
//console.log(userIdGeneratedByUser());
console.log("*-*/*/*++//////////+-*-*");
//Write a function name rgbColorGenerator and it generates rgb colors.
let rgbColorGenerator = () => {
    let randomValues = Math.floor(Math.random() * 255);
    let red = randomValues + 1;
    let green = randomValues - 5;
    let blue = randomValues + 3;
    document.body.style.backgroundColor = `rgb( ${red} ,${blue},${green})`;
    document.getElementById('spec').style.color = randomHexaNumberGenerator();
    return `(${red},${green},${blue})`;
}
console.log(rgbColorGenerator());
console.log("*-*/*/*++//////////+-*-*");
//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let arrayOfHexaColors = () => {
    let hexElem = Number(prompt('how much hexa color you want'))
    let varArr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let rand = Math.floor(Math.random() * 15);
    let hexArr = [];
    for (let b = 0; b < hexElem; b++) {
        hexArr.push(`#${varArr[rand - 1]}${varArr[rand + b]}${varArr[rand + 2]}${varArr[rand - 2]}${varArr[rand + 3]}${varArr[rand - b + 3]}`);
    }
    return hexArr;
}
//console.log(arrayOfHexaColors());
console.log("*-*/*/*++//////////+-*-*");
//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors() {
    let rgbElem = Number(prompt('how many rgb color you want'))
    let randomValues = Math.floor(Math.random() * 255);
    let rgbArr = [];
    let red = randomValues + 1;
    let green = randomValues - 5;
    let blue = randomValues + 3;
    for (let v = 0; v < rgbElem; v++) {
        rgbArr.push(`(${red},${green},${blue})`)
    }
    return rgbArr
}
//console.log(arrayOfRgbColors())
console.log("*-*/*/*++//////////+-*-*");
//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
    // Remove '#' if it's at the beginning of the input
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }

    // Parse the hex values for red, green, and blue
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);

    // Return the RGB color as a string
    return `rgb(${r}, ${g}, ${b})`;
}

// Example usage:
//let hexColor = prompt('Enter the hex color (with or without #):');
//let rgbColor = convertHexaToRgb(hexColor);
//console.log(`RGB color: ${rgbColor}`);
//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
console.log("*-*/*/*++//////////+-*-*");

let convertRgbToHexa = (rgb) => {
    if (rgb.length < 9) {
        alert("not a valid rgb values ");
        return;
    }
    let rgbArr = rgb.split(",");
    let firstThreeDigit = parseInt(rgbArr[0], 10).toString(16).padStart(2, "0");
    let secThreeDigit = parseInt(rgbArr[1], 10).toString(16).padStart(2, "0");
    let thirdThreeDigit = parseInt(rgbArr[2], 10).toString(16).padStart(2, "0");

    return `hex (${firstThreeDigit},${secThreeDigit},${thirdThreeDigit})`

}
//let rgbColor = prompt("enter the rgb color value separated by , e.g (255,45,65)");
//let hexaColor = convertRgbToHexa(rgbColor);
//console.log(hexaColor);
//Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors() {
    //need some refactor
    let userInput = prompt("enter the required color system (ex hex , rgb)");
    if (userInput.toLocaleLowerCase() !== "hex" || userInput.toLocaleLowerCase() !== "rgb") {
        let numberReq = parseInt(prompt("enter the number required of colors"));
        if (userInput.toLocaleLowerCase() == "hex") {
            if (numberReq !== Number || numberReq <= 0) {
                return
            } else {
                let varArr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                let rand = Math.floor(Math.random() * 15);
                let hexArr = [];
                for (let b = 0; b < numberReq; b++) {
                    hexArr.push(`#${varArr[rand - 1]}${varArr[rand + b]}
                ${varArr[rand + 2]}${varArr[rand - 2]}
                ${varArr[rand + 3]}${varArr[rand - b + 3]}`);
                }
                return hexArr;
            }
        } else if (userInput.toLocaleLowerCase() == "rgb") {
            if (numberReq !== Number && numberReq <= 0) {
                return
            } else {
                let randomValues = Math.floor(Math.random() * 255);
                let rgbArr = [];
                let red = randomValues + 1;
                let green = randomValues - 5;
                let blue = randomValues + 3;
                for (let v = 0; v < numberReq; v++) {
                    rgbArr.push(`(${red},${green},${blue})`)
                }
                return rgbArr
            }

        }
    } else {
        alert("this is invalid option ya 3rs")
    }

}
//console.log(generateColors());
console.log("*-*/*/*++//////////+-*-*");
//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
let shuffleArray = (arr) => {
    let newArr = []
    for (let z = 0; z < arr.length; z++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        newArr.push(arr[randomIndex])

    }
    return newArr
}
//let inputArray = prompt("Enter an array separated by commas (e.g., 1,2,3):");
//let originalArray = inputArray.split(",");
//let shuffledArray = shuffleArray(originalArray);
//console.log(shuffledArray);
//console.log("*-*/*/*++//////////+-*-*");

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

let factorial = (theNumber) => {
    let factorial = 1;
    for (let u = theNumber; u > 0; u--) {
        factorial *= u;
    }
    return factorial;

}
console.log(factorial(5));
console.log("*-*/*/*++//////////+-*-*");
//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(parameter) {
    if (parameter === null || parameter === undefined || parameter === "") {
        console.log("its empty value")
    } else {
        console.log(`${parameter}`)
    }

}
isEmpty();
console.log("*-*/*/*++//////////+-*-*");
//Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...arg) {
    let theResult = 0;
    for (let i = 0; i < arg.length; i++) {
        theResult += arg[i];
    }
    return theResult;

}
console.log(sum(1, 2, 5, 8, 4));
console.log("*-*/*/*++//////////+-*-*");
//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
let theSummation = (array) => {
    let theSum = 0;
    array.forEach(element => {
        if (typeof element !== "number") {
            console.log("kosmk");
            return


        } else {

            theSum += element;

            return theSum;
        }

    });
    console.log(theSum);

}
console.log(theSummation([1, 5, 8, 7, 5, 6, 8, 4, 5]));
console.log("*-*/*/*++//////////+-*-*");
//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(inputArr) {
    let theSum = 0;
    inputArr.forEach(element => {
        if (typeof element !== "number") {
            console.log("kosmk");
            return;
        } else {
            theSum += element;
        }
    });
    let theAverage = theSum / inputArr.length;
    return theAverage;
}
console.log(average([1, 2, 5, 4, 4, 4, 7, 8, 5, 6, 9, 8]));
console.log("*-*/*/*++//////////+-*-*");
//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
let modifyArray = (arr) => {
    if (arr.length < 5) {
        return "item not found";
    } else {

        arr[4] = arr[4].toUpperCase();
    }
    return arr

}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
console.log("*-*/*/*++//////////+-*-*");
//Write a function called isPrime, which checks if a number is prime number.
function isPrime() {
    let temp = 0;
    let n = parseInt(prompt("please enter a number"));
    for (let r = 1; r <= n; r++) {
        if (n % r == 0) {
            temp++;
        }
    }
    if (temp == 2) {
        console.log(`${n} is prime number`)
    } else {
        console.log(`${n} is not a prime number`);
    }
}
//isPrime();
console.log("*-*/*/*++//////////+-*-*");
//Write a functions which checks if all items are unique in the array.
let unique = (arr) => {
    for (let y = 0; y < arr.length; y++) {
        let pre = arr[y - 1];
        let next = arr[y + 1];
        if (arr[y] === pre || arr[y] === next) {
            console.log("its not a unique array");
            return false;
        }
    }
    console.log("its a unique array")
    return arr;
}

//unique([1, 2, 3, 5, 6, 6, 8, 7, 4]);
console.log("*-*/*/*++//////////+-*-*");
//Write a function which checks if all the items of the array are the same data type.
function checkDataType(arr) {
    for (let y = 1; y < arr.length; y++) {
        let pre = typeof arr[y - 1];
        let next = typeof arr[y + 1];
        if (typeof arr[y] !== pre && typeof arr[y] !== next) {
            console.log("its not a unique data array");
            return false;
        }
    }
    console.log("its a unique data array")
    return arr;
}
checkDataType(["g", "f", 5]);
console.log("*-*/*/*++//////////+-*-*");
//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable() {
    let theInput = prompt("please enter the character");
    if (theInput.includes("$") || theInput.includes("_")) {
        return "its not valid character in javaScript";
    }
    return "its valid character in javaScript";
}
//console.log(isValidVariable());
console.log("*-*/*/*++//////////+-*-*");
//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomSeven() {
    let randomArray = [];
    for (let t = 0; t < 7; t++) {
        let ran = Math.floor(Math.random() * 10);
        randomArray.push(ran);
    }
    for (let q = 1; q < randomArray.length; q++) {
        let ran = Math.floor(Math.random() * 10);
        let temp;
        if (randomArray.includes(q)) {
            randomArray.pop(randomArray[q]);
            randomArray.push(ran);
        }
    }
    return randomArray;
}
console.log(randomSeven());
console.log("*-*/*/*++//////////+-*-*");
//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of theoriginal array
let reverseCountries = () => {
    let theNewCountryArray = [...countries];
    let theReversedArr = [];
    for (let f = theNewCountryArray.length - 1; f > 0; f--) {
        theReversedArr.push(theNewCountryArray[f]);
    }
    return theReversedArr;
}
console.log(reverseCountries());
console.log("*-*/*/*++//////////+-*-*");







//Declare a function fullName and it print out your full name.
function myFullName(){
    let firstName = "molto";
    let secName =" 98";
    console.log(firstName + " " +secName)
}
myFullName();
console.log("*-*-*-*");
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(first, sec){
    first = "molto"
    sec = "98"
    return first + " " + sec;
}
console.log(fullName());
console.log("*-*-*-*");
//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNum(num1 = "d5l rqm", numb2 = "ya m3rs"){

    return num1 + numb2;

}
console.log(addNum(5,6));
console.log("*-*-*-*");
//An area of a rectangle is calculated as follows: area = length x width
function areaOfRectangle(length, width){
    return length * width

}
console.log(areaOfRectangle(5,6));
console.log("*+---++++-*-*-*");
//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length , width){
    return 2* (length + width)

}
console.log(perimeterOfRectangle(9,11));
console.log("*-*-*+--*");

function volumeOfRectPrism(length, width, height){
    return length * width * height;

}
console.log(volumeOfRectPrism(9,11,5));
console.log("*-**//-*-*");

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let pi = 3.14;
    return pi * r * r;
}
console.log(areaOfCircle(5));
console.log("*-*/*/*-*-*");
//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let pi = 3.14;
    return 2 * pi *r ;
}
console.log(circumOfCircle(5));
console.log("*-*/*/*-*-*");
//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density
function densityCalc(mass , volume){
    return mass / volume;

}
console.log(densityCalc(10,2));
console.log("*-*/*/*-*-*");
//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedCalc(distance ,time){
    return `speed = ${distance / time} m/s`;
}
console.log(speedCalc(10,2));
console.log("*-*/*/*++++++++++-*-*");
//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightCalc(mass,gravity){
    return mass * gravity;
}
console.log(weightCalc(10,2));
console.log("*-*/*/*++++++++++-*-*");
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(temp){
    return `${(temp * 9/5) + 32} f`;
}
console.log(convertCelsiusToFahrenheit(15));
console.log("*-*/*/*+++))))+++++++-*-*");
//need some edit
function bmiCalc(weight, height){
 const BMI = weight * (height*height);
 let result;
 if(BMI < 18.5){
    result == "you are underweight";
 } else if(BMI >= 18.5 || BMI <= 24.9){
    result == "you have normal weight";
 } else if (BMI >= 25 || BMI <= 29.9 ){
    result == " you are over weight";
 }else{
    result == "you are Obese";
 }
 return result;
}
console.log(bmiCalc(170, 1.70));
console.log("*-*/*/*+++))))+++++++-*-*");
function checkSeason(month){
    if(month == "dec"|| month == "jan" || month == "feb"){
        return "winter"
    }else if(month == "march"|| month == "april" || month == "may"){
        return "spring"
    }else if(month == "sep"|| month == "oct" || month == "nov"){
        return "autumn"
    }else{
        return "summer"
    }

}
console.log(checkSeason("sep"));
console.log("*-*/*/*+++))))+++++++-*-*");
function findMax(){
    let theMax = arguments[0] ;
    for(let i = 0; i< arguments.length ; i++){
        if(arguments[i] > theMax ){
            theMax = arguments[i];
        }
    }
    return theMax;
}
console.log(findMax(0,-10,-30));
console.log("*-*/*/*+++))))+++++++-*-*");

//Exercises: Level 2

function solveLinEquation(a, b, c){
    let result = (c + b)/ a;
    //ax + by + c = 0;
    return result;

}
console.log(solveLinEquation(2,5,8));
console.log("*-*/*/*+++))))+++++++-*-*");
//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c){
    let result = (c + b)/ a;
    //ax + by + c = 0;
    return result;

}
console.log(solveQuadEquation(2,5,8));
console.log("*-*/*/*+++))))+++++++-*-*");
//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function arrSum(arr){
    let theSum = 0;
    for(let j = 0; j < arr.length; j++){
        theSum += arr[j];
    }
    return theSum;
}
console.log(arrSum([1,5,8,9,4,7,2,3]));
console.log("*-*/*/*+++))))++++++48676746874+-*-*");

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
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
function swapValues(a, b){
    let x = b;
    let y = a;
    return `the first value is ${x}, and the seconde value is ${y}`;
}
console.log(swapValues(5,7));
console.log("*-*/*/*+++))))+++++++-*-*");
//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    let temp = [];
    for(let k = arr.length - 1; k >= 0; k-- ){
        temp.push(arr[k]);
    }
    return temp;
}
console.log(reverseArray([1,2,3,6,4,5]));
console.log(reverseArray(["a","s","d","f","e","r"]));
console.log("*-*/*/*+++(((((((((((((((())))))))))))))))))))+++++++-*-*");

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
    let temporary = [];
    for(let m = 0; m < arr.length; m++){
        temporary.push(arr[m].toString().toUpperCase());
    }
    return temporary;
}
console.log(capitalizeArray(["f","s","v","f","e","g"]));
console.log("*-*/*/*+++(())))))))))))))+++++++-*-*");
//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
arr=[];
function addItem(item){
     arr.push(item);
     return arr;
}
console.log(addItem( "/'/",2));
console.log(addItem("as"));
console.log(addItem("ty"))
console.log("*-*/*/*+++(()))))))+++++++-*-*");
//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, arr){
    return arr.splice(index,1);
}
console.log(removeItem(5,[1,2,3,4,5,6,7,8,5,4,3,3]));
console.log("*-*/*/*+++(()))))))+++++++-*-*");
//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number){
    let sum = 0;
    for(let r = number; r >= 0; r-- ){
        sum += r

    }
    return sum

}
console.log(sumOfNumbers(10))
console.log("*-*/*/*+++(()))))))+++++++-*-*");
//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n){
    let oddSum = 0;
    for(let w = n; n >= 0; n--){
        if( n % 2 !== 0 ){
            oddSum += n;
        }

    }
    return oddSum;

}
console.log(sumOfOdds(15));
console.log("*-*/*/*+++(())+++-*-*");
//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(numbers){
    let evenSum = 0;
    for(let t = numbers; t>= 0; t--){
        if(t % 2 == 0){

            evenSum += t;
        }
    }
    return evenSum
}
console.log(sumOfEven(10));
console.log("*-*/*/*+++-*-*");
function evensAndOdds(theNum){
    let theOddSum = 0;
    let theEvenSum = 0;
    for(let i = theNum; i >= 0; i--){
        if( i !== 0){
            if( i % 2 == 0){
                theEvenSum += i;
            }else if(i % 2 !== 0){
                theOddSum += i;
            }
        }
    }
    return `the number of odds are ${theOddSum} \nthe number of even are ${theEvenSum}`
}
console.log(evensAndOdds(10));
console.log("*-*/*/*++//////////+-*-*");
//Write a function which takes any number of arguments and return the sum of the arguments
let theArrSum = function(...arg){
    let theSum = 0;
    for(let y = 0; y < arg.length; y++){
        theSum += arg[y];
    }
    return theSum;
}
let result = theArrSum(1,2,3,8);
console.log(result);
console.log("*-*/*/*++//////////+-*-*");
//Writ a function which generates a randomUserIp.
const randomUserIP = () => {
    let firstPart = Math.floor(Math.random()* 200);
    let secPart = Math.floor(Math.random()* 190);
    let thirdPart = Math.floor(Math.random()*100);
    let fourthPart = Math.floor(Math.random()*60);

    return `${firstPart}.${secPart}.${thirdPart}.${fourthPart}`
}
console.log(randomUserIP());
console.log("*-*/*/*++//////////+-*-*");
//Write a function which generates a randomMacAddress
const randomMacAddress = () => {
    const charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const numArr = [1,2,3,4,5,6,7,8,9,0];
    let randomChar = Math.floor(Math.random()*27);
    let randNum = Math.floor(Math.random()*9);
    return `${ numArr[randNum] }${ numArr[randNum] + 2}: ${ numArr[randNum] + 1 }${charArr[randomChar]} : ${ numArr[randNum] }${ numArr[randNum] + 2} : ${charArr[randomChar]}${charArr[randomChar]} : ${charArr[randomChar]}${charArr[randomChar]} : ${charArr[randomChar]}${charArr[randomChar]}`
}
console.log(randomMacAddress());
console.log("*-*/*/*++//////////+-*-*");
//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = () =>{
    let varArr = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0];
    let rand = Math.floor(Math.random()*15);
    return `#${varArr[rand-1]}${varArr[rand+1]}${varArr[rand+2]}${varArr[rand-2]}${varArr[rand + 3]}${varArr[rand -3]}`;
}
console.log(randomHexaNumberGenerator());
console.log("*-*/*/*++//////////+-*-*");
//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = () =>{
    theArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0];
    let rand = Math.floor(Math.random()*15);
    return `${ theArr[rand + 2] }${theArr[rand + 3]}${theArr[rand + 4]}${theArr[rand + 1]}${theArr[rand +5]}${theArr[rand +4]}${theArr[rand - 3]}`;
}
console.log(userIdGenerator());
console.log("*-*/*/*++//////////+-*-*");













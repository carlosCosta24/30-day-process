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
    let theMax = 0 ;
    for(let i = 0; i< arguments.length ; i++){
        if(arguments[i] > theMax ){
            theMax = arguments[i];
        }
    }
    return theMax;
}
console.log(findMax(5,15,500));
console.log("*-*/*/*+++))))+++++++-*-*");
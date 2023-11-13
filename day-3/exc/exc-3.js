// Exercises: Level 1
let firstName = 'molto' ;
let lastName = 'michel';
let country = 'brazil';
let city = 'aracaju';
let age = 25;
let isMarried = false ;
let date = new Date();
let truthyValue = 4 < 5;
let truthyValueOne = 4 !== 5;
let truthyValueTow = 4 != 5 || 4 < 5;
let falsyValue = 4 > 5;
let falsyValueOne = 4 == 5;
let falsyValueTow = true == false;
let python ='python';
let jargon  ='jargon';
let dragon = 'dragon';

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(date));
console.log(typeof(10) == ('10'));
console.log(parseInt('9.8') == (10));
console.log(truthyValue, falsyValue);
console.log(truthyValueOne, falsyValueOne);
console.log(truthyValueTow, falsyValueTow);

console.log(4 > 3);  //true
console.log(4 >= 3); //true
console.log(4 < 3);  //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4);  //false
console.log(4 !== 4); //false
console.log(4 != '4'); //true
console.log(4 == '4'); //true
console.log(4 === '4'); //false
console.log(python.length == jargon.length );
console.log(4 > 3 && 10 < 12);  //true
console.log(4 > 3 && 10 > 12); //true
console.log(4 > 3 || 10 < 12);  //false
console.log(4 > 3 || 10 > 12); //false
console.log(!(4 > 3)); //true
console.log(!(4 < 3)); //true
console.log(!(false));  //false
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true
console.log(python.match('on'), dragon.match('on')); //false

console.log(date.getDay() + 1);
console.log(date.getMonth() + 1);
console.log(date.getDay() + 1);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMinutes());
console.log(date.getFullYear()/4);  //Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log('----------------------------------------------------------------------------------------');
//Exercises: Level 2

//first script
const butnOne = document.getElementById('perimeter');
const butnTown = document.getElementById('area');
const areaOut = document.getElementById('tri-area');
const permOut = document.getElementById('tri-perimeter-out');
const rectButn = document.getElementById('rect-area');
const rectOut = document.getElementById('rect-area-out');

butnOne.addEventListener('click',areaCalc);
//butnTown.addEventListener('click',perimCalc);
//rectButn.addEventListener('click', rectFun)



function areaCalc(){
let base = prompt('please enter the triangle base value');
let height = prompt('please enter the triangle height');
let result = base * height * 0.5;
areaOut.innerText = result


}
function perimCalc(){
let lengthOne = parseInt(prompt('please enter the triangle first length'));
let lengthTow = parseInt(prompt('please enter the triangle seconde length'));
let lengthThree = parseInt(prompt('please enter the triangle third length'));
let result = lengthOne + lengthTow +lengthThree;
permOut.innerText = result
}

//calculate an area of rectangle


function rectAreaFun(){
let lengthOne = parseInt(prompt('please enter the rectangle first length'));
let lengthTow = parseInt(prompt('please enter the rectangle seconde length'));
let result = lengthOne * lengthTow;
rectOut.innerText =result;
}

//calculate an perimeter of rectangle
//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

function rectPerimeterFun(){
    let lengthOne = parseInt(prompt('please enter the rectangle first length'));
    let lengthTow = parseInt(prompt('please enter the rectangle seconde length'));
    let result = 2*(lengthOne * lengthTow);
    rectOut.innerText =result;
i}

//area of circle

function circleArea(){
    let pi = 3.16;
    let radius = parseInt(prompt('please enter the r '));
    let result = pi * radius**2;

}

function circlecircum(){
    let pi = 3.16;
    let radius = parseInt(prompt('please enter the r '));
    let result = 2*pi * radius;
}

//slope
function slopeCalcul(){
    let x1 = parseInt(prompt('please enter x-1 value'));
    let x2 = parseInt(prompt('please enter x-2 value'));
    let y1 = parseInt(prompt('please enter y-1 value '));
    let y2 = parseInt(prompt('please enter y-2 value '));
    let slope = y1-y2 / x1 - x2 ;


}

//slope compare


//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.


function hourlyRate(){
let hours = parseFloat(prompt('enter hours'));
let rate = parseFloat(prompt('please enter rate per hour '));
let earning = alert(`your weekly earning is ${hours * rate} `)
}


function nameJudge(){
    let name = prompt('please enter yor name !');
    let nameWithoutSpaces = name.trim();
    if(nameWithoutSpaces.length < 7){
        alert("you have a short name ");
    }else{
        alert("you have a long name ");

    }

    //Compare your first name length and your family name length

    let firstName = prompt('enter your first name ').trim();
    let familyName = prompt('enter your first name ').trim();

    let compareTool;
    if(firstName.length > familyName){
        compareTool == "longer than"
    }else{
        compareTool == "shorter than "

    }
    i
    let finalResult = `Your first name, ${firstName} is ${compareTool} your family name, ${familyName}`

    alert(finalResult);
}

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let  myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} older than you `);

//drive age

function drive (){
    let legalAge =18;
    let currentDate = new Date().getFullYear();
    let birthDay = parseInt(prompt('please enter your birth year '));
    let status = currentDate - birthDay;
    let finalDecision ;
    if(status < legalAge){
        finalDecision == `you will be allowed to drive after ${legalAge - status} `;

    }else{
        finalDecision == `you are ${status}. you are old enough to drive`;


    }


}


function secondCalculator(){
    let useAge = parseInt(prompt("please enter yor age"))
    let ageInSeconde = useAge * 31536000;
    let out ;
}



console.log(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDay()+1} ${new Date().getHours()}-${ new Date().getMinutes()}`);
console.log(`${new Date().getDay()+1}-${new Date().getMonth()+1}-${new Date().getFullYear()} ${new Date().getHours()}-${ new Date().getMinutes()}`);
console.log(`${new Date().getDay()+1}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()} ${ new Date().getMinutes()}`);


//level 3

function humanReadable(){
    let now = new Date();
    let months = now.getMonth() + 1;
    let humanMonth;
    let day = now.getDay();
    let humanDay;
    let hours = now.getHours();
    let humanHour;
    let minutes = now.getMinutes()+1;
    let humanMinute;
    if(months < 10){
        humanMonth == `0${months}`
    }else{
        humanMonth = months;
    };
    if(day < 10){
        humanDay = `0${day}`;
    }else{
        humanDay = day;
    };
    if(hours < 10){
        humanHour = `0${hours}`
    }else{
        humanHour = hours;
    }
    if(minutes < 10){
        humanMinute = `0${minutes}`
    }else{
        humanMinute = minutes;
    }
    console.log(typeof(humanHour))
    console.log(`${now.getFullYear()}-${humanMonth}-${humanDay} ${humanHour}:${humanMinute}`);

}
humanReadable();
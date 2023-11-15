// let theAge = parseInt(prompt("Enter your age"));
// const button = document.getElementById('click-my');
// button.addEventListener('click', driveStatus);

// function driveStatus(){
// if(theAge < 18){
//     alert("You are old enough to drive.");
// }else{
//     alert(`You are left with ${18 - theAge} years to drive.`);

// }
// }

console.log("--------------------------------------------")
//age compare
let theAge = parseInt(prompt('enter your age '))
let myAge = 25;
if(theAge > myAge ){
    console.log(`you are ${theAge - myAge} years older than me`);

}else if(theAge < myAge){
    console.log(`I am ${myAge - theAge} years older than you`);
}else{
    console.log('we are in the same age');
}

let a = 4;
let b = 3;

if(a > b){
    console.log(`${a} is grater than ${b}`);

}

a > b ? console.log(`${a} is grater than ${b}`):console.log(`${a} is smaller than ${b}`);


let number = parseInt(prompt('please enter a number '));
function checkEven(){
    if(number % 2 == 0){
        console.log(` ${number} is even number !`);
    }else{
        console.log(`${number} is odd number!`);
    }
}
checkEven();

console.log("--------------------------------------------")
//Exercises: Level 2
let grade = parseInt(prompt('please enter your grade '));
function checkGrade(){
    if(grade <= 100 && grade >= 80){
        console.log(`your ${grade} is equal to A grade!`);
    }else if(grade <= 89 && grade >= 70){
        console.log(`your ${grade} is equal to B grade!`);
    }else if(grade <= 60 && grade >= 69){
        console.log(`your ${grade} is equal to c grade!`);
    }else if(grade <= 50 && grade >= 59){
        console.log(`your ${grade} is equal to D grade!`);
    }else{
        console.log(`your ${grade} is equal to F grade!`);
    }
}
checkGrade();


let months = (prompt('please enter the month '));
function checkSeason(){
    if(months.toLocaleLowerCase == 'september' || months.toLocaleLowerCase == 'October ' ||  months.toLocaleLowerCase == 'november '){
        console.log(`your are in ${months} and it is Autumn season  `);
    }else if(months.toLocaleLowerCase == 'may' || months.toLocaleLowerCase == 'april  ' ||  months.toLocaleLowerCase == 'march '){
        console.log(`your are in ${months} and it is spring season`);
    }else if(grade <= 60 || grade >= 69){
        console.log(`your ${grade} is equal to c grade!`);
    }else if(grade <= 50 || grade >= 59){
        console.log(`your ${grade} is equal to D grade!`);
    }else{
        console.log(`your ${grade} is equal to F grade!`);
    }
}
checkGrade();
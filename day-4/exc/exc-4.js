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
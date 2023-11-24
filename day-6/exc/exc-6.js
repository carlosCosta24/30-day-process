//Exercises: Level 1
for(let i = 0; i < 10; i++){

    console.log(`this is the: ${i}`);
}
console.log('*********************');

let i=0;
while(i <10){
console.log(`${i}`);
i++
}
console.log('*************');
let j = 0;
do{
    console.log(`this is :${'#########'} \t`);
    j++;
}while(j<10);
console.log('*************');

for(let i = 10; i >0; i--){

    console.log(`this is the: ${i}`);
}
console.log('*************');
let k=10;
while(k > 0){
console.log(`${i}`);
k--;
}
console.log('*************');

let c = 10;
do{
    console.log(` ${ '#' } > ${c}`);
    c--;
}while(c > 0);
console.log('*************');

for(let n =0 ; n< 50 ; n++){
    console.log('*******\t');
}
console.log('*************');

let hash = '#';
for(let f = 1; f < 8 ; f++ ){

    console.log(`${hash}`);
    hash += "#";
}
console.log('*************');

for(let x = 0; x <= 10 ; x++){
    console.log(`${x} x ${x} = ${x*x}\n`)
}
console.log('*************');

console.log('i\t i^2\t\t i^3');
for(let x = 0; x <= 10 ; x++){
    console.log(`${x}\t\t ${x*x}\t\t ${x*x*x}\t`);
}
console.log('*************');

//Use for loop to iterate from 0 to 100 and print only even numbers
for(let y=0 ; y <= 100; y++){
    if( y % 2 ==0 ){
        console.log(y);
    }
}
console.log('*************');

//Use for loop to iterate from 0 to 100 and print only odd numbers

console.log('************************************************************');
for(let y=0 ; y <= 100; y++){
    if( y % 2 !==0 ){
        console.log(y);
    }
}
console.log('************************************************************');
//Use for loop to iterate from 0 to 100 and print only prime numbers
for(let y=0 ; y <= 100; y++){
    if( y > 2 && y % y === 0 && y /1 ===0){
        console.log(`${y} is prime` );
    }
}
console.log('************************************************************');
//se for loop to iterate from 0 to 100 and print the sum of all numbers
let theSum = 0;
for(let y=0 ; y <= 100; y++){
    theSum +=y;
}
console.log(`The sum of all numbers from 0 to 100 is ${theSum}`);
console.log('************************************************************');
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let theEvenSum = 0;
let theOddSum = 0;
for(let y=0 ; y <= 100; y++){
    if(y % 2 ==0){
        theEvenSum +=y;
    }else{
        theOddSum += y;
    }

}
console.log('*************');
let theArr = [];
theArr.push(theEvenSum,theOddSum)
console.log(`The sum of all evens from 0 to 100 is ${theEvenSum}. And the sum of all odds from 0 to 100 is ${theOddSum}.`);
console.log('************************************************************');
console.log(theArr);
console.log('************************************************************');

 let randArr = [];
 for(let q = 0 ; q <= 5 ; q++ ){
     let rand = Math.floor(Math.random()*10);
     randArr.push(rand);
 };

 console.log(randArr);
 console.log('*************');
//Develop a small script which generate a six characters random id
 let rand = Math.floor(Math.random()*7);
 let values =[1,2,3,4,5,6,7,8,9,'a','b','c','d','f','g'];
 let randString = [];
 for(let l = 0 ; l<= 7 ; l++){
randString.push(values[rand]);
}
console.log(rand);
console.log(randString);
console.log('**********--------');
//Exercises: Level 2
function randomGenerator(){
    const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',+
    'O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g',+
    'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',+
    '0','1','2','3','4','5','6','7','8','9'];
    console.log(characters.length);
    let n = parseInt(prompt('enter the length of your id'));
    let id =[];
    if(n !== 0 && n !== undefined){
    for(let o = 0; o < n ; o++ ){
        let rand = Math.floor(Math.random()*62);
        id.push(characters[rand]);
    }
    }
    return id;

    }
console.log(randomGenerator());
console.log('************************************************************//');
// //Write a script which generates a random hexadecimal number.
// //function hexaGenerateor(){
// let hexa = ['#','*','*','*','*','*','*'];
// let valus = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9];
// let randomNum = Math.floor(Math.random()*16);
// hexa.forEach(element => {
// element == (valus[randomNum]);
// console.log(element);
// });
// //(let p = 0 ; p <hexa.length/2 ; p++ ){
// //     let starting = hexa[1];
// //     let sec = hexa[starting + 1 ];
// //     starting == (valus[randomNum]);
// //     sec ==(valus[randomNum]);
// //}
// //return hexa;
// //}
// //console.log(hexaGenerateor());



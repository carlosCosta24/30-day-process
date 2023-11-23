//Exercises: Level 1
for(let i = 0; i < 10; i++){

    console.log(`this is the ${i} *`);
}


let i=0;
while(i <10){
console.log(i);
i++
}

let j = 0;
do{
    console.log(` ${ '#' }`);
    j++
}while(j<10);

for(let i = 10; i >0; i--){

    console.log(`this is the ${i} *`);
}

let k=10;
while(i > 0){
console.log(i);
i--
}

let c = 10;
do{
    console.log(` ${ '#' } * ${c}`);
    c--;
}while(c > 0);


for(let n =0 ; n< 50 ; n++){
    console.log('************************************\n**************************************************');
}

let hash = '#';
for(let f = 1; f < 8 ; f++ ){

    console.log(`${hash}`);
    hash += "#";
}

for(let x = 0; x <= 10 ; x++){
    console.log(`${x} x ${x} = ${x*x}\n`)



}

console.log('i\t i^2\t i^3');
for(let x = 0; x <= 10 ; x++){

    console.log(`${x}\t ${ x*x}\t ${ x*x*x}\n`);



}
//Use for loop to iterate from 0 to 100 and print only even numbers
for(let y=0 ; y <= 100; y++){
    if( y % 2 ==0 ){
        console.log(y);
    }
}

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
let theArr = [];
theArr.push(theEvenSum,theOddSum)
console.log(`The sum of all evens from 0 to 100 is ${theEvenSum}. And the sum of all odds from 0 to 100 is ${theOddSum}.`);
console.log('************************************************************');
console.log(theArr);
console.log('************************************************************');
// let randArr = [];
// for(let q = 0 ; q <= 5 ; q++ ){
//     let rand = Math.floor(Math.random()*10);
//     randArr.push(rand)
// };
// console.log(randArr);
// //Develop a small script which generate a six characters random id:
// let rand = Math.floor(Math.random()*7);
// let values =[1,2,3,4,5,6,7,8,9,'a','b','c','d','f','g'];
// let randString = [1,2,3,56,69,87,89];
// for(let l = 0 ; l<= randString.length ; l++){
//     randString.push(values[rand]);

// }
// console.log(rand);
// console.log(randString);
console.log('************************************************************--');
//Exercises: Level 2
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('chose an id length') , randomGenerator =>{
//     let idLength = require();
//     let id ='';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const chrLength = characters.length;
//     let o = 0;
//     while(o < idLength){
//             id += characters.charAt(Math.floor(Math.random() * chrLength));
//             o++;
//         }
//         readline.close();
//         return id;
//     }

//     console.log(randomGenerator(45));
console.log('************************************************************//');
//Write a script which generates a random hexadecimal number.
let randomNum = Math.(Math.random()*6);
console.log(randomNum);
// function hexaGenerateor(){
// let hexa = ['#','*','*','*','*','*'];
// let valus = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9];
// let randomNum = Math.floor(Math.random()*6);
// for(let p = 0 ; p <hexa.length/2 ; p++ ){
//     let starting = hexa[1];
//     let sec = hexa[starting ++ ];
//     starting.push(valus[randomNum]);
//     sec.push(valus[randomNum])
// }
// return hexa;
// }
// console.log(hexaGenerateor());



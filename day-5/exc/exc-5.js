//Exercise: Level 1
// let emptyArray = [];
// let fiveElement = [1,2,3,6,5];
// console.log(fiveElement.length);
// console.log(fiveElement[0], fiveElement.length - 1 , fiveElement[2]);
// let mixedData = [1,2 ,'3m 7sen', 'tlata', 4, 'x' , 'almzr3a' ];
// console.log(mixedData.length);
// let itCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','and','Amazon'];
// console.log(itCompany);
// console.log(itCompany.length, itCompany[0], itCompany.length - 1 , itCompany[3]);
// itCompany.forEach(element => {
//     console.log(element);

// });
// itCompany.forEach(element=>{
//     element = element.toUpperCase();
//     console.log(element);
// })
// console.log(itCompany.toString(),'are big IT companies.');

// function fang(){
//     let search = prompt('please enter company name ');
//     let searchResult = search.toLowerCase();
//     if(itCompany.includes(searchResult) ){
//         console.log(` ${searchResult} is a fang company`);
//     }else{
//         console.log(`${searchResult} is not a company !`)
//     }
// }
// fang();

// //not accurate
// itCompany.forEach(element=>{
//     if(element.includes('o')){
//         console.log(element);
//     }
// })

// console.log(itCompany.sort());
// console.log(itCompany.reverse());
// console.log(itCompany.slice(0,3));
// console.log(itCompany.slice(5));
// let middele = itCompany.length /2;
// console.log(itCompany.slice(middele));
// console.log(itCompany.unshift());
// console.log(itCompany.pop(middele));
// console.log(itCompany.pop());
// console.log(itCompany=[]);



//Exercise: Level 2

import {countries} from "./countries.js";
import {webTech} from "./web_techs.js";

console.log(countries);
console.log(webTech);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let editOne =[text.slice(0, 37).split(' ') + text.slice(39).split(',')];

let theArr = [];
editOne.forEach(element => {
theArr.push(element)

 });

console.log(theArr);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('meat');
shoppingCart.push('Sugar');
shoppingCart[2] = 'Green Tea';


console.log(shoppingCart);

if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA');

}else{
    countries.push('Ethiopia')
}


if(webTech.includes('Sass')){
    console.log('Sass is a css preprocess');

}else{
    webTech.push('Sass');
    console.log(webTech);

}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

//Exercise: Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sorted = ages.sort();
let max = sorted[9];
let min = sorted[0];
let theMedian = (ages[4] + ages[5]) /2;
let range = max - min;
let sum = 0;


for(let i=0; i < ages.length; i++){

    sum += ages[i];



}
let aver = sum / ages.length;
console.log(max);
console.log(min);
console.log(theMedian);
console.log(sum);
console.log(range);
console.log(aver);

//Compare the value of (min - average) and (max - average)
let minminusavrg = Math.abs(min - aver);
let maxminusavrg = max -aver;
console.log(minminusavrg);
console.log(maxminusavrg);
console.log(countries.slice(0,10));

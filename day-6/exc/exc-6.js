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
console.log(randString);
console.log('**********--------');
//Exercises: Level 2
function randomGenerator(){
    const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',+
    'O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g',+
    'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',+
    '0','1','2','3','4','5','6','7','8','9'];
    let n = parseInt(prompt('enter the length of your id'));
    let id =[];
    let theString;
    if(n !== 0 && n !== undefined){
    for(let o = 0; o < n ; o++ ){
        let rand = Math.floor(Math.random()*62);
        id.push(characters[rand]);

    }
    theString = id.toString();
    return theString.split();
}

}
//randomGenerator();
console.log('************************************************************//');
//Write a script which generates a random hexadecimal number.
function hexaGenerateor(){
let hexa = '';
let valus = 'ABCDEF0123456789';
for (let p = 0 ; p <6; p++ ){
let randomNum = Math.floor(Math.random()*16);
 hexa += valus.charAt(randomNum);

}
return `#${hexa}`;
}
console.log(hexaGenerateor());
console.log('************************************************************///');


function rgpGnerator(){
    let rgb = [] ;
    for(let s = 0; s < 3 ; s++){
        let randomNum = Math.floor(Math.random()*256);
        rgb.push(randomNum);
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`

}
console.log(rgpGnerator());
console.log('************************************************************////');
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

import { countries } from "../../day-5/exc/countries.js";
function sumArrItems(){
    let req = ['AL','BO','CA','DE','ET','FI','GE','HU','IR','JA','KE'];
    let newArr = [];
    //need to edit
    for( let r = 0 ; r < req.length; r++ ){
        for(  let c =0; c < countries.length; c++){
            if(req[r][0] === countries[c][0]){
                newArr.push(countries[c]);
                break;
        }}}
return newArr;

}
console.log(sumArrItems());
console.log('*************************/////');
//Using the above countries array, create an array for countries length'.
function returnLength(){
    //need to edit
    let array = sumArrItems();
    let lengthArr = [];
    for(let g = 0; g < array.length; g++ ){
        lengthArr.push(array[g].length)
    }
    return lengthArr

}
console.log(returnLength());
console.log('*************************/////**');

//Use the countries array to create the following array of arrays:
function codeItems(){
    let processArr = sumArrItems();
    let countArr= [];
    let generalArr = [];
    //need to edit
    for( let r = 0 ; r < processArr.length; r++ ){
            countArr = [`${processArr[r]}`,
                            `${processArr[r].slice(0,3)}`,
                            `${processArr[r].length}`];
                            generalArr.push(countArr);
                        }
    return generalArr;
}
console.log(codeItems());
console.log('****///****//***///***//**');
//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
function checkLand(){
    let theProcess = sumArrItems();
    let theResult =[];
        for(let z = 0; z < theProcess.length;z++ ){
            if(theProcess[z].includes('land')){
                theResult.push(theProcess[z]);
        }

        //need to edit
}
    return theResult;
}
console.log(checkLand());
console.log('****///****/////***//**');

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
console.log('****/*****************//****//************///***//**');
function checkIa(){
    let theCountry = [...countries];
    let theOut = [];
    for(let k =0 ; k< theCountry.length; k++){
        if(typeof theCountry[k] === 'string' && theCountry[k].includes('ia')){
            theOut.push(theCountry[k]);
        }
    }
    return theOut;

}
console.log(checkIa());
console.log('****///****/////***//**');
//Using the above countries array, find the country containing the biggest number of characters.
function theLongest(){
    let theCot = [...countries];
    let theFinal = [];
    let theLong = '';
    for(let w = 0; w < theCot.length; w++){
        if(theCot[w].length > theLong){
            theLong = theCot[w];
        }
    }
    theFinal.push(theLong, `${theLong.length}`);
    return theFinal;
}
console.log(theLongest());
console.log('****///****/////***//****--');

//Using the above countries array, find the country containing only 5 characters.
function withFive(){
    let theCot = [...countries];
    let theFinal = [];
    for(let n = 0 ; n < theCot.length; n++){
        if(theCot[n].length == 5 ){
            theFinal.push(theCot[n], `the length = ${theCot[n].length}`);

        }
    }
    return theFinal;
}
console.log(withFive());
console.log('****///****/////***//****--');
//Find the longest word in the webTechs array
import{webTech} from "../../day-5/exc/web_techs.js"
function theLenghty(){
    let theArr = [...webTech];
    let theFinal = ' ';
    for(let n = 0 ; n < theArr.length; n++){
        if(theArr[n].length > theFinal.length){
            theFinal= theArr[n];
        }
    }
    return theFinal;
}
console.log(theLenghty())
console.log('****///****/////***//****--');
//Use the webTechs array to create the following array of arrays:
function elementWithLength(){
    //need to edit
let theGeneral = [];
let subGeneral = [];
let processField = [...webTech];
    for(let u = 0 ; u < processField.length; u++){
        subGeneral.push(processField[u], processField[u].length);
        theGeneral.push(subGeneral)
        subGeneral = [];
    }

return theGeneral
}
console.log(elementWithLength());
console.log('****///****/////***//****--');
//called a MERN stack app.
function mernStack(){
    let mernArr = ['MongoDB','Express','React','Node '];
    let fin = '';
    for(const elem of mernArr){
        fin += elem[0];

    }
    return fin.toString().replace(',','')

}
console.log(mernStack());
console.log('****///****/////***//****--');
//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
function arrStack(){
    let mernArr =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
    for(const elem of mernArr){
        console.log(elem);
    }
}
console.log(arrStack());
console.log('****///****/////***//****--+++');
//reverse the order using loop without using a reverse method.
function theRev(){
   let primary =  ['banana', 'orange', 'mango', 'lemon'];
   let secondary =[];
   let index = 3
   do{
    secondary.push(primary[index])
    index--
   }while(index >= 0)
   return secondary;
}
console.log(theRev());
console.log('****///****/////***//****--+++++-------');
//Print all the elements of array as shown below
function doublefor(){
    const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']];
    for(let i = 0 ; i < fullStack.length; i++){
        for(let j = 0; j < fullStack[i].length; j++){
            console.log(fullStack[i][j]);
        }
    }
}
console.log(doublefor());
console.log('****///****//77777777777777777//***//****--+++++-------');
//finally the 2 is finish








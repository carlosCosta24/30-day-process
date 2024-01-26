//Exercises: Level 1
//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let pattern = /\d+/g;
let numbers = text.match(pattern);
let theTotalSalary = numbers.reduce((acc, cur) => {
    return parseInt(acc) + parseInt(cur);
})
console.log(`the total salary from this text input:${text} = ${theTotalSalary}`);
console.log('------------------------------**********************************--------------------------');

//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let coordinates = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
let coordinatesPatterns = /-?\b\d+\b/g;
let patternsArr = new Array(...coordinates.match(coordinatesPatterns));
patternsArr.sort((a, b) => {
    if (parseInt(a) > parseInt(b)) return -1;
    if (parseInt(a) < parseInt(b)) return 1;
    return 0
});
let distance = parseInt(patternsArr[0]) + parseInt(patternsArr.length - 1);
console.log(patternsArr);
console.log(distance);
console.log('------------------------------**********************************--------------------------');
//Write a pattern which identify if a string is a valid JavaScript variable
let isValid = (input) => {
    let pattern = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/
    return pattern.test(input);
}
console.log(isValid('first_name')) // True
console.log(isValid('first-name')) // False
console.log(isValid('1first_name')) // False
console.log(isValid('firstname')) //True
console.log('------------------------------**********************************--------------------------');



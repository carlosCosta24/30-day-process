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
//Exercises: Level 2
//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

let tenMostFrequentWords = (input, number = input.length) => {
    let pattern = /\b\w+\b/g
    let words = input.match(pattern)
    let result = [];
    for (let n = 0; n < words.length; n++) {
        let theWord = words[n].toLowerCase();
        let count = 1;
        for (let k = n + 1; k < words.length; k++) {
            if (theWord === words[k].toLowerCase()) {
                count++
            }
        }
        let alreadyExist = result.find(item => item.word === theWord);
        if (!alreadyExist) {

            result.push(
                {
                    word: theWord,
                    count: count
                }
            );
        }
    }
    result.sort((a, b) => parseInt(b.count) - parseInt(a.count));
    return result.slice(0, number);
}
console.log(tenMostFrequentWords(paragraph, 5));




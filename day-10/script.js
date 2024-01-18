//Exercises:Level 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];
//create an empty set
let emptySet = new Set();
console.log(emptySet.size);
console.log("jdphozjhpajhipae[rjhpoahjpaerjhaoprthka';fhgerk");
//Create a set containing 0 to 10 using loop
let containTen = new Set();
for (let t = 0; t < 10; t++) {
    containTen.add(t);
}
console.log(containTen);
console.log("jdphozjhpajhipae[rjhpoahjpaerjhaoprthka';fhgerk");
//Remove an element from a set
containTen.delete(6);
console.log(containTen);
console.log("jdphozjhpajhipae[rjhpoahjpaerjhaoprthka';fhgerk");
//Clear a set
containTen.clear();
console.log(containTen);
console.log("jdphozjhpajhipae[rjhpoahjpaerjhaoprthka';fhgerk");
//Create a set of 5 string elements from array
let setFromArr = new Set(countries[0]);
setFromArr.delete("l");
console.log(setFromArr);
console.log("jdphozjhpajhipae[rjhpoahjpaerjhaoprthka';fhgerk");
//Create a map of countries and number of characters of a country
let letters = [];
let numberOfLetter = countries.forEach((country) => {
    let temp = [];
    for (let y = 0; y < country.length; y++) {
        temp.push(country.charAt(y));

    }
    return letters.push(temp.length);
});
console.log(letters)
lettersWithNumber = [];
let inserting = () => {
    let firstPointer = 0;
    let secPointer = 0;
    if (countries.length > firstPointer && letters.length > secPointer) {
        for (let l = 0; l < countries.length; l++) {
            lettersWithNumber.push([countries[firstPointer], letters[secPointer]]);
            firstPointer++;
            secPointer++;
        }
    } else {
        return false
    }

}
inserting();
console.log(lettersWithNumber)
console.log("jdphozjhpajhipae[rjhpoahjpaerjhaoprthka';fhgerk");
let countriesMap = new Map(lettersWithNumber);
console.log(countriesMap);




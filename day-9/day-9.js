//Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//Explain the difference between forEach, map, filter, and reduce.
/*
forEach:
Purpose: Iterates over each element in an array and performs a provided function for each element.
Return Value: undefined. It does not create a new array; it simply iterates over the existing one.

map:
Purpose: Creates a new array by applying a provided function to each element in the original array.
Return Value: A new array with the same length as the original one, where each element is the result of applying the provided function.

filter:
Purpose: Creates a new array containing only the elements that satisfy a provided condition.
Return Value: A new array containing the elements that pass the condition.

reduce:
Purpose: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
Return Value: The accumulated result.

forEach is used for iteration without creating a new array.
map is used for creating a new array based on the transformation of each element.
filter is used for creating a new array with elements that satisfy a specific condition.
reduce is used for reducing an array to a single value through an iterative process.
*/

//Define a callback function before you use it in forEach, map, filter or reduce.
function printIt(item) {
    console.log(item)
}
countries.forEach(country => { printIt(country) });

names.map(name => {
    if (name.includes("M")) {
        printIt(name);
    }
});
console.log("ifgh0988ytdvsNDHBUIswrgh");

numbers.filter(number => {
    if (number > 8) {
        printIt(number)
    }
});
console.log("ifgh0988ytdvsNDHBUIswrgh");


printIt(countries.reduce((acc, country) => {
    if (country.includes("land")) {
        acc.push(country);
    }
    return acc
}, []));

console.log("ifgh0988ytdvsNDHBUIswrgh");

//Use forEach to console.log each country in the countries array.
countries.forEach(
    country => {
        console.log(country);
    }
);
console.log("ifgh0988ytdvsNDHBUIswrgh");
//Use forEach to console.log each name in the names array.
names.forEach(name => {
    console.log(
        name
    )

});
console.log("ifgh0988ytdvsNDHBUIswrgh");
//Use forEach to console.log each number in the numbers array.
numbers.forEach(number => {
    console.log(number);
});
//Use map to create a new array by changing each country to uppercase in the countries array.
console.log("ifgh0988ytdvsNDHBUIswrgh");
let theUpperCase = countries.map(country => country.toUpperCase());
console.log(theUpperCase);
//Use map to create an array of countries length from countries array.
console.log("ifgh0988ytdvsNDHBUIswrgh");
console.log(
    countries.map(country => country.length)
);
//Use map to create a new array by changing each number to square in the numbers array

let squNum = numbers.map(number => number * number);
console.log(squNum)
console.log("ifgh0988ytdvsNDHBUIswrgh");
//Use map to change to each name to uppercase in the names array
let nameUpperCase = names.map(name => name.toLocaleUpperCase());
console.log(nameUpperCase);
console.log("ifgh0988ytdvsNDHBUIswrgh");
//Use map to map the products array to its corresponding prices.
let correspondingPrices = products.map((products) => {
    let product = products.product;
    let price = products.price;
    console.log(`${product} = ${price}`);

});
console.log(correspondingPrices);
console.log("ifgh0988ytdvsNDHBUIswrgh");
//Use filter to filter out countries containing land.
let counterWithoutLand = countries.filter((country) => {
    return !country.includes("land");


});
console.log(counterWithoutLand);
//Use filter to filter out countries having six character.
let sixChar = countries.filter((country) => { return !country.length > 6 });
console.log(sixChar);
//Use filter to filter out countries containing six letters and more in the country array
let sixAndMore = countries.filter((country) => {
    return country.length >= 6
});
console.log(sixAndMore);
console.log("ifgh0988ytdvsNDHBUIswrgh");
//Use filter to filter out country start with 'E';
let startWithE = countries.filter((country) => {
    return country.charAt(0) === "E"
});
console.log(startWithE)
//Use filter to filter out only prices with values.
let priceValuePair = products.filter((product) => {
    if (product.price !== ' ' && product.price !== '') {
        return product
    }
});
console.log(priceValuePair);
//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let getStringLists = (arr) => {
    arr.forEach((element, index, arr) => {
        arr[index] = `${element}`
    })
};
let test = [1, 2, "s", "d", "f", "g", "g", "f", "r", "s", "a"];
getStringLists(test);
console.log(test);
//Use reduce to sum all the numbers in the numbers array.
const initial = 0;
console.log(numbers.reduce((acc, cur) => {
    return acc + cur;

}));

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let northCountry = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];
let last = northCountry.length - 1;
let concatenated = northCountry.reduce((acc, curr, index) => {
    if (index !== last) {

        return acc.concat(curr, ",");
    } else {
        return acc.concat("and ", curr);

    }
}, " ");
console.log(concatenated);


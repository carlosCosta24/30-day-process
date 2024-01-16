//Exercises: Level 1
const allCountries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];
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
}, "");
console.log(`${concatenated}` + " are north European countries");
console.log("ifgh0988ytdvsNDHBUIswrgh");
//Explain the difference between some and every:
//Check if some of the elements are similar in one aspect. It returns boolean
//every: Check if all the elements are similar in one aspect. It returns boolean

//Use some to check if some names' length greater than seven in names array
let graterThanSeven = names.some((name) => {
    name.length > 7
});

console.log(graterThanSeven);
console.log("ifgh0988ytdvsNDHBUIswrgh");


//Use every to check if all the countries contain the word land
let containLand = countries.every((country) => {
    const land = 'land';
    return country.toLowerCase().includes(land);
});
console.log(containLand);
console.log("ifgh0988ytdvsNDHBUIswrgh");

//Explain the difference between find and findIndex.
//find: Return the first element which satisfies the condition
//findIndex: Return the position of the first element which satisfies the condition

//Use find to find the first country containing only six letters in the countries array
let firstSixChar = countries.find((country) => {
    return country.length == 6;
});
console.log(firstSixChar);

//Use findIndex to find the position of the first country containing only six letters in the countries array
let indexOfFirstSixChar = countries.findIndex((country) => {
    return country.length == 6;
});
console.log("ifgh0988ytdvsNDHBUIswrgh");
console.log(indexOfFirstSixChar);
//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let norwayPosition = countries.findIndex((country) => {
    return country == "Norway";
});
console.log("ifgh0988ytdvsNDHBUIswrgh");
console.log(norwayPosition)
//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let russiaPosition = countries.findIndex((country) => {
    return country == "Russia";
});
console.log("ifgh0988ytdvsNDHBUIswrgh");
console.log(russiaPosition)
//Exercises: Level 2
//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalPrice = products.map((product) => { return product.price; }).filter(ele => { if (ele !== "" && ele !== " ") { return ele } }).reduce((acc, curr) => { return acc + curr }, 0);
console.log("ifgh0988ytdvsNDHBUIswrgh");
console.log(totalPrice);
//Find the sum of price of products using only reduce reduce(callback)
let usingOnlyReduce = products.reduce((acc, prod) => {
    if (prod.price !== "" && prod.price !== " ") {
        return acc + parseInt(prod.price);
    } else {
        return acc
    }
}, 0);
console.log("ifgh0988ytdvsNDHBUIswrgh");
console.log(usingOnlyReduce);
//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(arr, pattern) {
    let finalArr = [];
    arr.filter((country) => {
        if (country.toLowerCase().includes(pattern)) {

            finalArr.push(country)
        }
    })
    return finalArr;
}
console.log("ifgh0988ytdvsNDHBUIswrgh");
console.log(categorizeCountries(allCountries, "br"));
//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// need to revest
function arrOfObject(allCountries) {
    let result = [];
    allCountries.forEach((country) => {
        let firstLetter = country.charAt(0).toLowerCase();
        let obj = result.find((item) => item.letter === firstLetter);

        if (obj) {
            obj.count++;
        } else {
            result.push({
                letter: firstLetter,
                count: 1
            });
        }
    });

    return result
}
console.log(arrOfObject(allCountries));
//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(arr) {
    let number = 0;
    arr.forEach((country) => {
        number++;
        if (number <= 10) {
            console.log(country)
        }

    });
    return number;
};
console.log(getFirstTenCountries(allCountries));
console.log("ifgh0988ytdvsNDHBUIswrgh");

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(arr) {
    for (let u = arr.length - 1; u >= 185; u--) {
        console.log(arr[u]);
    }
}
console.log(getLastTenCountries(allCountries));








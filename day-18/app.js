const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// //Exercises: Level 1
// //Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(countriesAPI).then(response => response.json()).then(

//     data => {
//         setTimeout(() => {

//             console.log(data);
//             for (const ele of data) {
//                 //  console.info(`name: ${ele.name} , area: ${ele.area} , population: ${ele.population}`);

//             }
//             console.log("/-*/*-/*-/-*/-*/-*/-*/-*/-*/-*/-");
//         }, 500)
//     }


// ).catch(error => console.error(error));

// //Exercises: Level 2
// //Print out all the cat names in to catNames variable.
// fetch(catsAPI).then(response => response.json()).then(data => {

//     setTimeout(() => {
//         {
//             let catNames = [];
//             for (const ele of data) {
//                 catNames.push(ele.name);
//             }
//             console.log(catNames);

//         }
//         console.log("/-*/*-/*-/-*/-*/-*/-*/-*/-*/-*/-");
//     }, 600)
// }

// ).catch(error => console.error(error));


// //Exercises: Level 3
// //Read the cats api and find the average weight of cat in metric unit.
// const averageCatWight = async () => {
//     try {
//         const theResp = await fetch(catsAPI);
//         const catArr = await theResp.json();
//         let catWights = [];



//         for (const ele of catArr) {
//             const trueNumber = parseFloat(ele.weight.metric.replace(" - ", "."));
//             catWights.push(trueNumber);
//         }
//         const result = catWights.reduce((acc, cur) => {
//             return acc + cur
//         }, 0);
//         return result / catWights.length;
//     } catch (err) {
//         console.log(err)
//     }
// }

// console.log("/*/*/*/*/*/*/ waiting for data  ");
// averageCatWight().then(averageCatWight => { console.log(averageCatWight) });

//Read the countries api and find out the 10 largest countries

let biggestCountry = async () => {
    try {
        const theResponse = await fetch(countriesAPI);
        const countries = await theResponse.json();
        let countryArea = [];

        for (const item of countries) {
            countryArea.push({
                country: item.name,
                area: item.area

            })
        }
        countryArea.sort((a, b) => {
            if (a.area !== undefined && b.area !== undefined) {
                return b.area - a.area;

            } else if (a.area === undefined && b.area === undefined) {
                return 0;
            } else if (a.area === undefined) {
                return 1
            } else {
                return -1
            }
        });
        return countryArea.slice(0, 10)

    } catch (err) {
        console.error(err);
    }

}

biggestCountry().then(func => console.log(func));



//Read the countries api and count total number of languages in the world used as officials.

fetch(countriesAPI).then(Response => Response.json()).then(data => {
    let languages = [];
    let final = [];
    let uniq = [];
    for (const item of data) {
        languages.push(item.languages)
    }
    languages.forEach(item => {
        for (const obj of item) {
            final.push(obj.name)
        }
    });
    let uniqLang = final.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, [])
    console.log(`the official uniqLang number is ${uniqLang.length}`)
}).catch(err => console.error(err));
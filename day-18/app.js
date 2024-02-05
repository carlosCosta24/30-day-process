const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Exercises: Level 1
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI).then(response => response.json()).then(
    data => {
        console.log(data);
        for (const ele of data) {
            console.info(`name: ${ele.name} , area: ${ele.area} , population: ${ele.population}`);
        }
    }
).catch(error => console.error(error));

//Exercises: Level 2
//Print out all the cat names in to catNames variable.
console.log("/-*/*-/*-/-*/-*/-*/-*/-*/-*/-*/-");
fetch(countriesAPI).then(response => response.json()).then(
    data => {
        for (const ele of data) {
            console.info(`capital name: ${ele.capital}`);
        }
    }
).catch(error => console.error(error));


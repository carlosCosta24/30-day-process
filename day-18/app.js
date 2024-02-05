const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Exercises: Level 1
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI).then(response => response.json()).then(

    data => {
        setTimeout(() => {

            console.log(data);
            for (const ele of data) {
                console.info(`name: ${ele.name} , area: ${ele.area} , population: ${ele.population}`);

            }
            console.log("/-*/*-/*-/-*/-*/-*/-*/-*/-*/-*/-");
        }, 500)
    }


).catch(error => console.error(error));

//Exercises: Level 2
//Print out all the cat names in to catNames variable.
fetch(catsAPI).then(response => response.json()).then(data => {

    setTimeout(() => {
        {
            let catNames = [];
            for (const ele of data) {
                catNames.push(ele.name);
            }
            console.log(catNames);

        }
        console.log("/-*/*-/*-/-*/-*/-*/-*/-*/-*/-*/-");
    }, 600)
}

).catch(error => console.error(error));


//Exercises: Level 3
//Read the cats api and find the average weight of cat in metric unit.
const averageCatWight = async () => {
    try {
        const theResp = await fetch(catsAPI);
        const catArr = await theResp.json();
        let catWights = [];
        let result;
        for (const ele of catArr) {
            catWights.push(ele.weight.metric)
        }
        catWights.map((ele) => {
            return toString(ele.replace(" - ", "."));

        });
        console.log(catArr.reduce((acc, cur) => {
            let totalWights = parseInt(acc) + parseInt(cur);
            // result = totalWights / catWights.length;
            // return result
            return totalWights;
        }));

    } catch (err) {
        console.log(err)
    }
}

console.log("/*/*/*/*/*/*/ waiting for data  ");
averageCatWight();

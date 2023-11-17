//Exercise: Level 1
let emptyArray = [];
let fiveElement = [1,2,3,6,5];
console.log(fiveElement.length);
console.log(fiveElement[0], fiveElement.length - 1 , fiveElement[2]);
mixedData = [1,2 ,'3m 7sen', 'tlata', 4, 'x' , 'almzr3a' ];
console.log(mixedData.length);
let itCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','and','Amazon'];
console.log(itCompany);
console.log(itCompany.length, itCompany[0], itCompany.length - 1 , itCompany[3]);
itCompany.forEach(element => {
    console.log(element);

});
itCompany.forEach(element=>{
    element = element.toUpperCase();
    console.log(element);
})
console.log(itCompany.toString(),'are big IT companies.');

function fang(){
    let search = prompt('please enter company name ');
    let searchResult = search.toLowerCase();
    if(itCompany.includes(searchResult) ){
        console.log(` ${searchResult} is a fang company`);
    }else{
        console.log(`${searchResult} is not a company !`)
    }
}
fang();

//not accurate
itCompany.forEach(element=>{
    if(element.includes('o')){
        console.log(element);
    }
})

console.log(itCompany.sort());
console.log(itCompany.reverse());
console.log(itCompany.slice(0,3));
console.log(itCompany.slice(5));
let middele = itCompany.length /2;
console.log(itCompany.slice(middele));
console.log(itCompany.unshift());
console.log(itCompany.pop(middele));
console.log(itCompany.pop());
console.log(itCompany.fill(0));





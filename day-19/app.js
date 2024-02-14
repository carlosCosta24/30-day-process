//Exercises: Level 1
//Create a closure which has one inner function
let callMe = () => {
    let myName = 'molto';
    let myLastName = () => {
        myName = myName + ' 98';
        return myName;

    }
    return myLastName()
}
console.log(callMe());
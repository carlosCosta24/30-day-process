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

//Exercises: Level 2
//Create a closure which has three inner functions

let callMeThree = () => {
    let myName = 'molto';
    let myLang = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
    let myLastName = () => {
        return myName = myName + ' 98';


    }
    let getMyLang = () => {
        return myLang.join('');

    }
    let printInfo = () => {
        if (myName.length > 10) { // Base case: stop recursion when myName length is greater than 10
            return '';
        } else {
            let myInfo = `${myLastName()} + ${getMyLang()}`;
            console.warn(myInfo);
            return myInfo;

        }
    }
    printInfo();
}
callMeThree();


//Exercises: Level 3
/*Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.*/

function personAccount() {
    let firstName = 'molto';
    let lastName = '98';
    let incomes = '10000$';
    let expenses = '3000$';

    function totalIncome() {
        console.log(incomes);
    }
    function totalExpense() {
        console.log(expenses);
    }
    function accountInfo() {
        console.log(`${firstName} ${lastName}`);

    }
    function addIncome() {
        incomes + 10.000;

    }
    function addExpense() {
        expenses + 2.000;
    }
    function accountBalance() {
        return `${incomes}-${expenses}`;

    }

    accountInfo();
    totalIncome();
    totalExpense();
    addIncome();
    addExpense()
    accountBalance()




}
personAccount()
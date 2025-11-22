/* Exercise One
Write a program to give a discount on train ticket based on the passenger age. 
If they are between 0 and 2 they get free ride, 
from age 3 to 18 get 15% discount,
 19 to 26 get 10% 
 and
 senior people older than 60 get 70%”

*/

// intial variable
let age = 0;

if (age >= 0 && age <= 2) {
    console.log("Free ride");
}
else if (age >= 3 && age <= 18) {
    console.log("15% discount!");
}
else if (age >= 19 && age <= 26) {
    console.log("10% discount!");
}
else if (age >= 60) {
    console.log("70% discount");
}
else {
    console.log("No discount");
}

/* Exercise Two: Rewrite this with ternary operator: 
if(a+b <4){
    result="Below";}
else {
    result="Over"
*/
let result;
let a = 1;
let b = 1;
result = (a + b < 4) ? 'Below' : 'Qver';
console.warn(result);





/* Exercise Three: Countdown to new year!
n this exercise, write a program counting from 10 to 0, 
when it's 10, print out OMG it started, 
when it's 0, print out Happy new year! , 
when it's other number just print out the number. 
You can decide which type of loop you use.
*/
let counterDwonToNewYear = 10
while (counterDwonToNewYear >= 0) {
    if (counterDwonToNewYear === 10)
        console.log("OMG it started");

    else if (counterDwonToNewYear === 0)
        console.log("Happy new year!");
    else
        console.log(counterDwonToNewYear);
    counterDwonToNewYear--;

}

/*Exercise Three B:Count by sound
You decide to count how many of your friends has letter a in their names. 
The friend list is ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'], 
check each of them and see if the name includes letter 'a' by name.includes('a') 
(You should go to MDN and check what this means): 
- if it contains letter a, increment your variable count 
- if it does not, log their name out

*/
const ArrayOfFriendsName = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola',
    'Sam', 'Kay', 'Bruce'];
let counter = 0;
for (let i = 0; i <= ArrayOfFriendsName.length - 1; i++) {   //
    let captalName = ArrayOfFriendsName[i].toUpperCase();

    if (captalName.includes('A')) {
        counter++;
    }
    else {
        console.log(`${ArrayOfFriendsName[i]} doesn’t have an a.`)
    }
}
console.log(`Number of Name includes a or A: ${counter}`);



//A function min(a,b) which returns the least of two numbers a and b.
function getMin(a, b) {
    if (a < b)
        return a;
    return b;
}
console.log(getMin(1, 1));


/* A function that calculates the tax percentage based on the give income
For example:
If your income is less than 50,000 you pay 8%
If your income is between 50,000 and 100,000 you pay 15%
If your income is between  100,000 and  300,000 you pay 30%
If your income is above that, you pay 50%
*/

function getIncomeTaxeRate(income) {
    let taxRate;
    if (income < 50000) {
        taxRate = 0.08;
    } else if (income < 100000) {
        taxRate = 0.15;
    } else if (income < 300000) {
        taxRate = 0.30;
    } else { taxRate = 0.50; }
    return taxRate;

}
console.log(getIncomeTaxeRate(100000))

/*
//Flight booking fullname function
function getFullName(firstName, surName) {
    return `${firstName} ${surName}`;
}
console.log(getFullName('Ahmad', 'pakraei'));


//Formal fullname
function getFullName(firstName, surName, useFormalName = false) {
    if (!firstName || !surName) { return 'First Name or Surname is not Valid!' }
    else if (useFormalName) { return `Lord ${firstName} ${surName}`; } else {
        return `${firstName} ${surName}`;
    }
}
console.log(getFullName('Reza', 'Pakraei'));          
console.log(getFullName('Reza', 'Pakraei', true));    
console.log(getFullName(undefined, null));

*/

//Add Gender
function getFullName(firstName, surName, female = false, useFormalName = false) {
    if (!firstName || !surName) { return 'First Name or Surname is Not Valid!' }
    else if (useFormalName) {
        if (female) return `Lady ${firstName} ${surName}`; else { return `Lord ${firstName} ${surName}`; }
    } else {
        return `${firstName} ${surName}`;
    }
}

console.log(getFullName('Reza', 'Pakraei'));
console.log(getFullName('Tahereh', 'Azadi', true, false));
console.log(getFullName(undefined, null));


/*
function getFullName2(firstname,surname,female,useFormalName)
    {
        return (!firstname ||!surname)
        ? 'firat name or surname is invalid'
        : (useFormalName)?((female)?`Lady ${firstname} ${surname}`:`Lord ${firstname} ${surname}`)
        :`Lord ${firstname} ${surname}`
    }
    console.log(getFullName2('reza','sara',true,false)) */


//Event application
/**
 * Returns the weekday name for a date that is `numberOfDays` days from today.
 *
 * Logic:
 * 1. Get today's weekday index using `new Date().getDay()`
 *    - 0 = Sunday, 1 = Monday, ... 6 = Saturday.
 *
 * 2. Store an array of weekday abbreviations in order.
 *
 * 3. Add today's index to `numberOfDays` to find the target day.
 *
 * 4. Use modulo 7 (`% 7`) so the index wraps around correctly
 *    when the total exceeds 6 (e.g., going past Saturday loops to Sunday).
 *
 * 5. Log the resulting weekday name based on the calculated index.
 */
function getEventWeekday(numberOfDays) {
    let today = new Date().getDay();
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    console.log(weekDays[(today + numberOfDays) % 7]);

}
getEventWeekday(2);


//Weather wear
function getClothesForTemperature(temperature) {
    if (temperature < 0) {
        return 'Heavy Jacket, Gloves, Hat, Sweater, Scarf';
    }
    if (temperature < 10) {
        return 'Jacket, Sweater, Warm Pants, Scarf';
    }
    if (temperature < 20) {
        return 'Sweater, Shirt, Pants, Light Jacket';
    }
    if (temperature < 30) {
        return 'T-shirt, Light Pants or Shorts, Sunglasses';
    }
    return 'Tank top, Shorts, Cap, Sunglasses';

}



//Add Student T0 class
const class07Students = [];
const class07MaxCapacity = 6;

function getNumberOfStudents() {
    return class07Students.length;
}
function addStudentToClass(studentName) {
    if (!studentName) {
        return 'invalid Student Name!'
    }
    if (class07Students.includes(studentName)) {
        return `Student ${studentName} is already in the class`;
    }
    if (studentName == 'Queen') {
        class07Students.push('Queen');
        return;
    }
    if (class07Students.length >= class07MaxCapacity) {
        return 'Cannot add more students to class ';
    }
    class07Students.push(studentName);


}
console.log(addStudentToClass('reza'));
console.log(addStudentToClass('ali'));
console.log(addStudentToClass('maryam'));
console.log(addStudentToClass('zahra'));
console.log(addStudentToClass());
console.log(addStudentToClass('reza'));
console.log(addStudentToClass('parsa'));
console.log(addStudentToClass('rosa'));
console.log(addStudentToClass('zoo'));
console.log(addStudentToClass('Queen'));





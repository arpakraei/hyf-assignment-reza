




const pizza={
    price:80,
    name:"Peperoni",
    description:"You can",
    
    
}
// create an array and push in the object


let arrayOFingridieints=["Salami","Cheese"];
pizza.ingridieints=arrayOFingridieints;


// Create the Function and push into object
function getNameAndIngridents()
{
    return `${pizza.name}: ${pizza.ingridieints}`
}

pizza.getNameAndIngridents=getNameAndIngridents;


console.log(pizza.getNameAndIngridents());


// Exercise Of Array
let arrayOfPizaa=["Peperoni","Vegetari","None"];

function findPizaaInArray(arrayofpizza,pizzaname){

    for(let i=0;i<arrayofpizza.length();i++)
    {
        if (arrayofpizza[i]==pizzaname)
            return 'Find it';

    }
    return 'There is not item ';
}

let aarayOfIngridents=["onion","cheess","cream","meet"];
    const last = aarayOfIngridents.pop();
console.log(`The last Ingradient is: ${last}`);

const aarayOfPersion=[{name:'reza',age:40},{name:'ahmad',age:20}];

let sumOfage=0;
for (i=0;i<aarayOfPersion.length;i++){
    sumOfage=sumOfage+aarayOfPersion[i].age;
}
console.log(`The avarage of age is ${sumOfage/aarayOfPersion.length}`)

/**
 * 
 * 
 Let print 
 */
for (let i=1;i<=20;i++){
    if(i%2===0){
        console.log(`${i} is Even`);
    }
    else
    {
        console.log(`${i} is Odd`);
    }
}

function isEvenOrOdd(startNumber, endNumber){
    for(let i=startNumber;i<endNumber;i++){
        if(i%2===0){
        console.log(`${i} is Even`);
    }
    else
    {
        console.log(`${i} is Odd`);
    }
    }

}
isEvenOrOdd(100,120);

//
// function getFizzBuzz(startNumber,endNumber){
//     for (let i=startNumber;i<endNumber;i++){
//         if

//     }
// }




//Fibonacci sequence
let fiboArray = [];
function fibo(num) {
    fiboArray[0] = 0;
    fiboArray[1] = 1;
    for (let i =2;i<=num;i++){
        fiboArray[i]=fiboArray[i-1]+fiboArray[i-2];
    }
}
fibo(10);
console.log(fiboArray);

function fibo2(num){
    if (num===0) {return 0 }
    else if(num===1){return 1}
    else  {return (fibo2(num-1)+fibo2(num-2))};
} 
function printFiboSeries(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fibo2(i));
    }
}

printFiboSeries(10);

(async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json(); // Extracting data as a JSON Object from the response
    
    getDataFromExternalSource(data)
})();

function getDataFromExternalSource(mydata)
{
    const result={uniquserid:[],
        complitedT:0,
        notcomplited:0,
        usertenTitle:[],

    };
    for (item of mydata){
        if (item.completed){
            result.complitedT++;
        }else{
            result.notcomplited++;
        }
        if (!result.uniquserid.includes(item.userId)){result.uniquserid.push(item.userId)};
        if (item.userId===10){result.usertenTitle.push(item.title)};
        
    }
    console.log(result);
}

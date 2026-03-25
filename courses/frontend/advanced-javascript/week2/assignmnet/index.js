const message = document.getElementById('message');

//Function 1
function displayDelayMessage() {
    if (!message) return;
    
    setTimeout(() => {
        message.innerText = 'This text was delayed after 2.5 seconds';
    }, 2500);
}

document.addEventListener('DOMContentLoaded', displayDelayMessage);

//Function 2

const stringToLogElement=document.getElementById('delayedMessage');
function displayMessageAfter(delay,stringToLog){
    setTimeout(()=>{ 
        stringToLogElement.innerText=stringToLog;
    },delay*1000);
}

//displayMessageAfter(2,"This log displayed after 2 seconds");

//function 3
const delayMessageButton=document.getElementById('delayMessageButton');

delayMessageButton.addEventListener('click',()=>displayMessageAfter(5,"This log delayed after 5 seconds"));


//function 4
const varPlanet = document.getElementById('planet');
const earthlogger=function(){varPlanet.innerText='Earth'};

const saturnlogger=function(){varPlanet.innerText='Saturn'};

function planetLogFunction(logger){
    logger();
}
planetLogFunction(saturnlogger);

//function 5
const userLocationBut=document.getElementById('locationBut');
const pLatitude=document.getElementById('latitude');
const pLongitude=document.getElementById('longitude');
const iframeMap=document.getElementById('iframemap');

userLocationBut.addEventListener('click',()=>{
    if (!pLatitude || !pLongitude) return;
        navigator.geolocation.getCurrentPosition((position)=>{
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
        pLatitude.innerText=`This is your latitude: ${latitude}`;
        pLongitude.innerText=`This is your longitude: ${longitude}`;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;
        
        iframeMap.innerHTML=`<iframe src="${url}" frameborder="1" width="50%" height="400px"></iframe>`

    });
    
})




//function 8
document.addEventListener('dblclick',()=>{alert('You double click here!');console.log('you double clicked')});


//function 9
/* Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke (boolean), 
logFunnyJoke (function), and logBadJoke (function). If shouldTellFunnyJoke is true it should call 
logFunnyJoke, which displays a funny joke on the page. Otherwise it should call logBadJoke, 
which displays a bad joke on the page. */
const jokeElement=document.getElementById('joke');
function jokeCreator(shouldTellFunnyJoke,funnyJokeFunction,badJokeFunction){
    
    if (shouldTellFunnyJoke) {funnyJokeFunction();}
        else {badJokeFunction();}
}

function logFunnyJoke(){
    if (!jokeElement) return
    jokeElement.innerText='Funny joke is here!';
}
function logBadJoke(){
     if (!jokeElement) return
    jokeElement.innerText='Bad joke is here!';
}

jokeCreator(true,logFunnyJoke,logBadJoke);


//Function 1
function displayDelayMessage() {
  if (!message) return;

  setTimeout(() => {
    console.log("This text was delayed after 2.5 seconds");
  }, 2500);
}
document.addEventListener("DOMContentLoaded", displayDelayMessage);

//Function 2

function displayMessageAfter(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

//function 3
const delayMessageButton = document.getElementById("delayMessageButton");

delayMessageButton.addEventListener("click", () =>
  displayMessageAfter(5, "This log delayed after 5 seconds"),
);

//function 4

const earthlogger = function () {
  console.log("Earth");
};

const saturnlogger = function () {
  console.log("Saturn");
};

function planetLogFunction(logger) {
  logger();
}
planetLogFunction(saturnlogger);

//function 5
const userLocationBut = document.getElementById("locationBut");
const pLatitude = document.getElementById("latitude");
const pLongitude = document.getElementById("longitude");
const iframeMap = document.getElementById("iframemap");

userLocationBut.addEventListener("click", () => {
  if (!pLatitude || !pLongitude) return;
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    pLatitude.innerText = `This is your latitude: ${latitude}`;
    pLongitude.innerText = `This is your longitude: ${longitude}`;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

    iframeMap.innerHTML = `<iframe src="${url}" frameborder="1" width="50%" height="400px"></iframe>`;
  });
});

//function 7

const delayButton = document.getElementById("delayBut");
const delay = document.getElementById("timer");

delayButton.addEventListener("click", () => {
  const delayBySecond = Number(delay.value);
  if (!delayBySecond) return;
  runAfterDelay(delayBySecond, () => showDelayedMessage(delayBySecond));
});
function runAfterDelay(delayInSeconds, callback) {
  setTimeout(() => {
    callback();
  }, delayInSeconds * 1000);
}
function showDelayedMessage(delay) {
  console.log(`This message delayed ${delay} Second`);
}

//function 8
let clickCount = 0;
let timer;

document.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 1) {
    timer = setTimeout(() => {
      clickCount = 0;
    }, 500);
  }

  if (clickCount === 2) {
    clearTimeout(timer);
    console.log("Double click detected");
    clickCount = 0;
  }
});

//function 9

function jokeCreator(shouldTellFunnyJoke, funnyJokeFunction, badJokeFunction) {
  if (shouldTellFunnyJoke) {
    funnyJokeFunction();
  } else {
    badJokeFunction();
  }
}

function logFunnyJoke() {
  console.log("Funny joke is here!");
}
function logBadJoke() {
  console.log("Bad joke is here!");
}

jokeCreator(true, logFunnyJoke, logBadJoke);

//3-Function as a variable

//task1
const arrayOfFunctions = [add, multiply, divide];
function add(a, b) {
  console.log(`a + b = ${a + b}`);
}
function multiply(a, b) {
  console.log(`a * b = ${a * b}`);
}

function divide(a, b) {
  console.log(`a / b = ${a / b}`);
}

arrayOfFunctions.forEach((item) => item(3, 4));

//task2
//Area and perimeter of rectangle length and width

//area(2,3);
const area = (width, length) => {
  console.log(`Area of rectangle: ${width * length}`);
};
area(2, 3);

//task 3
const operations = {
  add,
  multiply,
  divide,
};
operations.add(5, 4);
operations.multiply(5, 4);
operations.divide(5, 4);

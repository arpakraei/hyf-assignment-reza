/** item array removal
Remove the item in names that is equal to nameToRemove

 */

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "Katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// How it works
// 1- Find the index of "Ahmad"
let index = -1;
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        index = i;
        break;
    }

}

if (index === -1)
    console.log("No such item in the array");
else {
    //2- Shift all elements to the left
    for (let i = index; i < names.length; i++) {
        names[i] = names[i + 1];
    }
    //3. Remove the last (duplicate) element.
    names.length--;
}

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']


/**
* When will we be there??
* Write a function where you specify your speed in km/h and how far you have to go in km. 
* The function has to return the time it will take to arrive at your destination. 
* The time should be formatted like this: 3 hours and 34 minutes
 */

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function getDurationOfTravel(travelInformation){
    // Extract speed and distance from the object
    const speed=travelInformation["speed"];
    const distance=travelInformation["destinationDistance"];
    // Calculate total time in hours (can be a decimal)
    const hours = Math.floor(distance / speed);
    // Get the decimal part of the hours and convert it to minutes
    const remainingDistance = distance / speed - hours;
    const minutes = Math.round(remainingDistance * 60);
    // Return result
    return `${hours} hours and ${minutes} minutes`

}
const travelTime = getDurationOfTravel(travelInformation);
console.log(travelTime); 


/**
 * Series duration of my life
 */

const seriesDurations = [
  {
    title: "Harry Potter",
    days: 2,
    hours: 12,
    minutes: 40,
  },
  {
    title: "Lord of the Ringss",
    days: 3,
    hours: 7,
    minutes: 20,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function getSeriesLifePercentage(averageLifeYears, seriesList) {
// Convert average lifespan from years to minutes
  const averageLifeMinutes = averageLifeYears * 365 * 24 * 60;
// total life time
let totalTimePercentage=0;
  // Loop through each series in the list
  for (let series of seriesList) {
    // Convert the series duration to total minutes
    const totalSeriesMinutes =
      series.days * 24 * 60 +
      series.hours * 60 +
      series.minutes;
    
    // Calculate percentage of life spent watching this series
    const percentage = ((totalSeriesMinutes / averageLifeMinutes) * 100);
    totalTimePercentage+=percentage;
    // Print result
    console.log(`\n${series.title} took ${percentage.toFixed(3)}% of my life`);
  }
    console.log(`In total that is ${totalTimePercentage.toFixed(3)}% of my life`)
}

getSeriesLifePercentage(80,seriesDurations);


//Smart-ease - Back to the basics!
/**
 * sava a note
 * get a note
 */
const notes = [];

function saveNote(content, id) {
  notes.push({content:content,id:id});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note
function getNote(id) {
    for(let note of notes){
        if (note.id===id){
            return note;
        }
    }
    return undefined;
  
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


//Log out notes
/**
 * 
 */
function logOutNotesFormatted() {
  for (let note of notes){
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}\n`)
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry


// Unique feature : Update a note

function updateNote(id, newcontent) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = newcontent;  
      return;
    }
  }
}
updateNote(2, 'Time for learning');
console.log(notes); 


//Smart phone usage app
let activities=[];
const usageLimitPerDay=10;
const today=new Date().toLocaleDateString();

function addActivity(date,activity,duration)
{
    activities.push({'date':date,'activity':activity,'duration':duration})
}
addActivity(today,'Facebook',24);
addActivity(today,'Youtub',38);
addActivity(today,'TikTok',24);
addActivity(today,'TikTok',20);

console.log(activities);

function showStatus(date){
    let totalTime=0;
    let numberOfActivityPerDay=0;
   
    for (activity of activities)
    {
        if (activity.date===date){
            numberOfActivityPerDay+=1;
            totalTime+=activity.duration;
        }
    }
    if (numberOfActivityPerDay==0)
    { 
        console.log(`No activity activity on ${date}`);
        return;
    }
    console.log(`You have added ${activities.length} activities. They amount to ${totalTime} min. of usage`);
    
    if (totalTime>usageLimitPerDay)
    {
        console.log('You have reached your limit, no more smartphoning for you!!!');
    }
}

function getTheMostTimeActivity() {

    // This array will store each unique activity with its total duration
    let listOfActivity = [];

    // Loop through all items in the activities array
    for (let activity of activities) {

        // Try to find this activity in listOfActivity
        let existing = listOfActivity.find(item => item.activity === activity.activity);

        // If activity is not found, add it as a new entry
        if (!existing) {
            listOfActivity.push({
                activity: activity.activity,
                totalDuration: activity.duration
            });
        } 
        // If activity already exists, update its total duration
        else {
            existing.totalDuration += activity.duration;
        }
    }

    // Show the summary list of all activities and their total durations
    console.log(listOfActivity);

    // Assume the first item has the most time
    let activityTheMostTimeOnIt = listOfActivity[0];

    // Loop through the rest of the list to find the real maximum
    for (let i = 1; i < listOfActivity.length; i++) {

        // If another activity has more time, update the maximum
        if (listOfActivity[i].totalDuration > activityTheMostTimeOnIt.totalDuration) {
            activityTheMostTimeOnIt = listOfActivity[i];
        }
    }

    // Print the activity with the most total time
    console.log(activityTheMostTimeOnIt);
}

showStatus('26/11/2025');
getTheMostTimeActivity();
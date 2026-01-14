// List of Hogwarts houses
const hogwartsHouses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
];

// Helper function to select elements by id
function getElementById(id) {
    return document.getElementById(id);
}

// Reads student name and assigns a random house
function assignHouseToStudent() {
    const studentNameInput = getElementById('nameOfStudent');
    const resultMessageSpan = getElementById('homeSpan');

    const studentName = studentNameInput.value;

    // Validate input
    if (studentName === '') {
        resultMessageSpan.style.color = 'red';
        resultMessageSpan.innerText = 'Please enter your name';
        return;
    }

    // Generate random house index
    const randomHouseIndex = Math.floor(
        Math.random() * hogwartsHouses.length
    );

    // Display assignment result
    resultMessageSpan.style.color = 'black';
    resultMessageSpan.innerText =
        `${studentName} belongs in ${hogwartsHouses[randomHouseIndex]}!`;
}

// Attach click event to button
getElementById('button1').addEventListener(
    'click',
    assignHouseToStudent
);

console.log("Welcome! You can choose one of the following options:");
console.log("1: Calculate your future age");
console.log("2: Calculate your dog's age");
console.log("3: Estimate a house price");
console.log("4: Generate a startup name");

let yourChoice = prompt("Please enter your selection (1-4): ");

switch (yourChoice) {
    case "1": {
        // Age-ify (A future age calculator)
        let yearOfBirth = 1987;
        let yearFuture = 2027;
        let age = yearFuture - yearOfBirth;

        console.log("\nFuture Age Calculator");
        console.log(`You will be ${age} years old in ${yearFuture}.`);
        break;
    }

    case "2": {
        // Goodboy-Oldboy (A dog age calculator)
        let dogYearOfBirth = 2017;
        let dogYearFuture = 2027;
        let dogYear = dogYearFuture - dogYearOfBirth;
        let shouldShowResultInDogYears = true;

        console.log("\nDog Age Calculator");
        if (shouldShowResultInDogYears)
            console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}.`);
        else
            console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}.`);

        break;
    }

    case "3": {
        // Housey pricey (A house price estimator)
        let width = prompt("Please enter the width of the house (in meters):");
        let height = prompt("Please enter the height of the house (in meters):");
        let deep = prompt("Please enter the depth of the house (in meters):");
        let gardenSizeInM2 = prompt("Please enter the garden size (in m²):");
        let houseCost = prompt("Please enter the actual cost of the house:");

        let volumeInMeters = width * height * deep;
        let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

        console.log("\nHouse Price Estimator");
        console.log("The estimated house price is:", housePrice);

        if (housePrice >= houseCost)
            console.log("This house seems expensive compared to the estimated price.");
        else
            console.log("This house seems reasonably priced.");

        break;
    }

    case "4": {
        // Ez Namey (Startup name generator)
        let firstWords = ['Tech', 'Blue', 'Generation', 'Zero', 'One', 'World', 'Nothing', 'Be'];
        let secondWords = ['Next', 'Brave', 'Is'];

        let lengthOffirstWordsArray = firstWords.length;
        let lengthOfsecondWordsArray = secondWords.length;

        const randomNumber1 = Math.floor(Math.random() * lengthOffirstWordsArray);
        const randomNumber2 = Math.floor(Math.random() * lengthOfsecondWordsArray);

        console.log("\nStartup Name Generator For You");
        console.log(`Your startup's name could be: "${firstWords[randomNumber1]} ${secondWords[randomNumber2]}"`);
        break;
    }

    default:
        console.log("Invalid selection! Please choose a number between 1 and 4.");
}

console.log("You Can Select From 1 to 4");
console.log("1: A future age calculator");
console.log("2: A dog age calculator");
console.log("3: A house price estimator");
console.log("4: A Startup name generator");
let yourChoose = prompt("Please Enter your Selection(1-4): ")


switch (yourChoose) {
    case "1": {
        //Age-ify (A future age calculator)
        let yearOfBirth = 1987;
        let yearFuture = 2027;
        let age = yearFuture - yearOfBirth;
        console.log("\n**A future age calculator**")
        console.log("You will be " + age + " years old in " + yearFuture + ".");
        break;
    }

    case "2":
        {//Goodboy-Oldboy (A dog age calculator)
            // defaind and initial variable
            let dogYearOfBirth = 2017;
            let dogYearFuture = 2027;
            let dogYear = dogYearFuture - dogYearOfBirth;
            let shouldShowResultInDogYears = true;

            //dispaly the result
            console.log("\n**A dog age calculator**")
            if (shouldShowResultInDogYears)//true
                console.log(`Your dog will be ${dogYear * 7} dog years old in 2027`);

            else //false

                console.log(`Your dog will be ${dogYear} human years old in 2027`);

            break;
        }
    case "3":
        {
            //Housey pricey (A house price estimator)
            // Get Inputs
            let width = prompt("Please Enter the Width of House");
            let height = prompt("Please Enter the Height of House");
            let deep = prompt("Please Enter the Deep of House");
            let gardenSizeInM2 = prompt("Please Enter the Garden Size");
            let houseCost = prompt("Please Enter the Houses Cost")

            //Calculation
            let volumeInMeters = width * height * deep;
            let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

            //Display the result
            console.log("\n**A house price estimator**")

            console.log("The House Price is Caluculated :", housePrice);

            //Display the final result


            if (housePrice >= houseCost)
                console.log("Thos is a Costly House");
            else
                console.log("This is Not Costly House");


            break;
        }
    case "4":
        {
            // Ez Namey (Startup name generator) 

            let firstWords = ['Tech', 'Blue', 'Generation', 'Zero', 'One', 'World', 'Nothing', 'Be'];
            let secondWords = ['Next', 'Brave', 'Is'];

            let lengthOffirstWordsArray = firstWords.length;
            let lengthOfsecondWordsArray = secondWords.length;

            const randomNumber1 = Math.floor(Math.random() * lengthOffirstWordsArray);
            const randomNumber2 = Math.floor(Math.random() * lengthOfsecondWordsArray);
            console.log("Your Startup's Name is :", firstWords[randomNumber1] + " " + secondWords[randomNumber2])

        console.log("\nStartup Name Generator");
        console.log(`Your startup's name could be: "${firstWords[randomNumber1]} ${secondWords[randomNumber2]}"`);
        break;
    }

    default:
        console.log("Invalid selection! Please choose a number between 1 and 4.");
}

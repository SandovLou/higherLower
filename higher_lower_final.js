let startRandom = 0;
let firstMessage = document.getElementById("firstmessage");
let message = document.getElementById("message");
let maxNum = 0;
let inputVal = false;
let tryAgain = 0;
const guessTracker = [];
let guessString = "";
let userGuess = 0;

promptPopUp();
randomGenerator();

function initiate() {
    userGuess = document.getElementById("userInputNumber").value;
    userGuess = Math.round(Number(userGuess));
    //console.log(userGuess);
    //console.log(document.getElementById("userInputNumber").value);

    if (document.getElementById("userInputNumber").value.trim().length != 0) {
        if ((userGuess != NaN && maxNum >= userGuess && userGuess > 0)) {
        
            if (numGen != userGuess) {
                if (guessTracker.includes(userGuess) == true) {
                    message.innerText = "You have already guessed that number.  Try another.";
                }
                else {
                    arrayHandler(userGuess);            
                    numMatcher(numGen, userGuess);
                    }
            }
            else if (tryAgain == 1) {
            startRandom = 0;
            message.innerText = "";
            maxNum = 0;
            inputVal = false;
            tryAgain = 0;
            guessTracker.length = 0;
            guessString = "";
            document.getElementById("userInputNumber").value = "";
            initiateTwo();
            }
            else {
                arrayHandler(userGuess);
                numMatcher(numGen, userGuess);
                tryAgain = 1;
            } 

        }
        else if((userGuess > maxNum && userGuess != NaN)){
            message.innerText = "That number is not in range, try again.";
        }
        else if ((userGuess <= 0 && userGuess != NaN)){
            message.innerText = "That number is lower than 1!";
        }
        else {
            message.innerText = "That is not a number!";
        }
    }
    else{
        message.innerText = "Enter a value!";
    }

}

function numMatcher(numGen, userGuess) {  

    if (numGen < userGuess) {
        message.innerText = "Too high!";
    }
    else if (numGen > userGuess) {
        message.innerText = "Too low!";
    }
    else {
        if(guessTracker.length == 1) {
            message.innerText = `You got it! You only guessed once! Are you a psychic!?  \n\n Click the guess button to try again.`;
        }
        else if(guessTracker.length == 2) {
            guessString = guessString.concat(guessTracker[0] ," and ", guessTracker[1]);
            message.innerText = `You got it! It took you ${guessTracker.length} tries and your guesses were ${guessString}.  \n\n Click the guess button to try again.`;  
        }
        else{
            for (let i = 0; i < (guessTracker.length - 2); i++) {
                guessString = guessString.concat(guessTracker[i], ", ");
            } 
            guessString = guessString.concat(guessTracker[(guessTracker.length - 2)], " and ", guessTracker[(guessTracker.length - 1)]);
            message.innerText = `You got it! It took you ${guessTracker.length} tries and your guesses were ${guessString}.  \n\n Click the guess button to try again.`;
        }
        
    }

}

function arrayHandler(userGuess) {
guessTracker.push(userGuess);
}

function promptPopUp(){
    while(inputVal == false) {
        maxNum = window.prompt("What is the maximum number you would like to guess from? \n (only positive numbers are valid)");
        maxNum = Math.round(Number(maxNum));
        firstMessage.innerText = `Guess a number between 1 and ${maxNum}.`
    
        if (maxNum != NaN && maxNum > 0) {
            inputVal = true;
        }
    }
}

function randomGenerator(){
    
    while(startRandom < 1) {
        numGen = Math.floor(Math.random() * maxNum) + 1;
        startRandom = 1;
        //console.log(numGen);
        }
}


function initiateTwo() {

    promptPopUp();
    randomGenerator();

}
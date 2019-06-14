//declare an array that contains each letter of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]


//Variables to hold wins, losses, guesses left, and guesses so far 
var userChoice;
var wins = 0;
var losses = 0;
var computerGuess;
var computerScore=0;
var numberOfGuesses=0;
var guessesRemaining = 9;



//create variables to hold references to HTML Element IDs so we can display wins, losses, guesses left, and guesses to far

var winsText = document.getElementById("user-wins");
var lossesText = document.getElementById("user-losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");


 

//Triggers the start of the game upon a key press. Pressing a key causes the counters to appear
document.onkeyup = function(event) {

    var userChoice = event.key;


// Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


//compares the users guess against the computers guess. If the user wins, win counter will go up by one. if the user loses    
if(userChoice === computerGuess){

  wins++

}

else {

    guessesRemaining--

    if(guessesRemaining < 0){

        guessesRemaining = 9;
    }
}



//Writes the content of the variables to the corresponding element ID's
 winsText.textContent = "Wins: " + wins;
 lossesText.textContent = "Losses: " + losses;
 guessesLeft.textContent = "Guesses left: " + guessesRemaining;
 guessesSoFar.textContent = "Guesses so far: " + numberOfGuesses;
}
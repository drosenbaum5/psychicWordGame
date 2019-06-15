//declare an array that contains each letter of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]


//Variables to hold wins, losses, guesses left, and empty array of guesses so far 
var userChoice;
var wins = 0;
var losses = 0;
var computerGuess;
var numberOfGuesses=[];
var guessesRemaining = 9;




var nextGame = function() {
guessesRemaining = 9;
numberOfGuesses = [];

}

//create variables to hold references to HTML Element IDs so we can display wins, losses, guesses left, and guesses to far

var winsText = document.getElementById("user-wins");
var lossesText = document.getElementById("user-losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");


document.onkeyup = function(event) {

    var userChoice = String.fromCharCode(event.keyCodeevent).toLowerCase();
    numberOfGuesses.push(userChoice);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    





//Writes the content of the variables to the corresponding element ID's

lossesText.textContent = "Losses: " + losses;
guessesLeft.textContent = "Guesses left: " + guessesRemaining;
guessesSoFar.textContent = "Guesses so far: " + numberOfGuesses;
winsText.textContent = "Wins: " + wins;

}
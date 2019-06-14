//declare an array that contains each letter of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]


//Variables to hold wins, losses, guesses left, and guesses so far 
var userChoice;
var wins = 0;
var losses = 0;
var computerGuess;
var computerScore;



//create variables to hold references to HTML Element IDs so we can display wins, losses, guesses left, and guesses to far

var wins = document.getElementById("user-wins");
var losses = document.getElementById("user-losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");


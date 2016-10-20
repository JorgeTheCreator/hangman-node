//Random word is selected and exported
var wordsToGuess = ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];



exports.randoWord = randoWord;
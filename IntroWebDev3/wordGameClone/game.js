let secretWord;
let currentGuess = 1;
let currentLetter = 1;
let currentTile = document.getElementById(`${currentGuess}-${currentLetter}`)
let currentWord;

const BACKSPACE = "Backspace";
const ENTER = "Enter";
const SECRETURL = "https://words.dev-apis.com/word-of-the-day";
const VALIDATE_URL = "https://words.dev-apis.com/validate-word";

const isLetter = (character) => {
    return /^[a-zA-Z]$/.test(character)
}

const gatherCurrentWord = () => {
    let word = "";
    for (let i = 1; i < 6; i++){
        word += document.getElementById(`${currentGuess}-${i}`).innerText;
        console.log({ word })
    }
    currentWord = word;
}

async function getSecretWord() {
    const response = await fetch(SECRETURL);
    const responObj = await response.json();
    secretWord = responObj.word;
}

const handleKeyPress = (event) => {
    if (isLetter(event.key)) {
        // set the current tile text
        currentTile.innerText = event.key
        // increment the current letter if less than 5
        if (currentLetter < 5) {
            currentLetter += 1;
            // increment the current tile
            currentTile = document.getElementById(`${currentGuess}-${currentLetter}`)
        }
    } else if (event.key === BACKSPACE) {
        // Decrement the currentTile and currentLetter if currentTile is blank
        if (currentTile.innerText === "" && currentLetter > 1) {
            currentLetter -= 1;
            currentTile = document.getElementById(`${currentGuess}-${currentLetter}`);
            currentTile.innerText = ""
        // Clear the current tile otherwise
        } else if (currentLetter > 1) {
            currentTile.innerText = ""
        }
    } else if (event.key === ENTER) {
        // If currentLetter = 5 and currentTile is not empty, validate the word 
        if (currentLetter === 5 && currentTile.innerText !== "") {
            // Gather the word from the current guess
            gatherCurrentWord();
            // Validate the word

            // Evaluate the guess word against the secret word

            // If correct, update the CSS classes of the current guess and alert on win condition

            // If incorrect, update the CSS classes of the current guess, setup the app for next guess if current guess is < 6
        }
    }
}

const init = () => {
    getSecretWord();
    document.querySelector("body").addEventListener("keydown", (event) => {
        handleKeyPress(event)
    })
}

init()

console.log({ secretWord })
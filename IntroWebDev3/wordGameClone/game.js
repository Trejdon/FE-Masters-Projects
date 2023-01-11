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

const setLoading = (isLoading) => {
    const loader = document.querySelector(".loader");
    (isLoading) ? loader.classList.remove("hidden") : loader.classList.add("hidden")
}

const gatherCurrentWord = () => {
    let word = "";
    for (let i = 1; i < 6; i++){
        word += document.getElementById(`${currentGuess}-${i}`).innerText;
    }
    currentWord = word;
}

async function getSecretWord() {
    const response = await fetch(SECRETURL);
    const responseObj = await response.json();

    secretWord = responseObj.word.toUpperCase();
}

const createMap = (wordArray) => {
    const characterCounts = {};
    for (let i = 0; i < wordArray.length; i++) {
        const character = wordArray[i];
        if (characterCounts[character] > 0) {
            characterCounts[character]++
        } else {
            characterCounts[character] = 1;
        }
    }

    return result;
}

const evaluateCharacter = (character, idx) => {
    if (secretWord.charAt(idx) === character) {
        return "correct";
    } else if (secretWord.includes(character)) {
        return "present";
    } else {
        return "incorrect";
    }
}

const evaluateWord = (word) => {
    const result = [];
    const wordArray = word.split('')

    wordArray.map((letter, idx) => {
        const eval = evaluateCharacter(letter, idx);
        result.push(eval)
    })

    return result;
}

const isCorrect = (resultArr) => {
    const correctArr = resultArr.filter(result => result === "correct")
    return correctArr.length === 5;
}

const updateGuessClasses = (resultArr) => {
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] !== "incorrect") {
            document.getElementById(`${currentGuess}-${i+1}`).classList.add(resultArr[i])
        }
    }
}

const validateCurrentWord = async (word) => {
    setLoading(true);
    const response = await fetch(VALIDATE_URL, { "method": "POST", "body": JSON.stringify({ word })});
    const responseObj = await response.json();
    setLoading(false);
    return responseObj.validWord;;
}

const handleKeyPress = async (event) => {
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

            // Set loading to indicate the guess is being validated

            // Validate the word
            const isValid = await validateCurrentWord(currentWord);

            if(isValid) {
                console.log("Word is valid")
            } else {
                console.log("Invalid word")
            };
            // Evaluate the guess word against the secret word
            const result = evaluateWord(currentWord);
            // Update the CSS classes of the current guess
            updateGuessClasses(result);
            // Win, lose, or guess again
            if(isCorrect(result)){
                alert("You Win")
            } else if (currentGuess === 6){
                alert(`What a Loser.  The word was ${secretWord}!`)
            } else {
                currentGuess += 1;
                currentLetter = 1;
                currentWord = "";
                currentTile = document.getElementById(`${currentGuess}-${currentLetter}`)
            }
            // If incorrect, update the CSS classes of the current guess, setup the app for next guess if current guess is < 6
        }
    }
}

const init = () => {
    setLoading(true);
    getSecretWord();
    document.querySelector("body").addEventListener("keydown", (event) => {
        handleKeyPress(event)
    })
}

init()

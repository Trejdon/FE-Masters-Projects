let secretWord;
let currentGuess = 1;
let currentLetter = 1;
let currentTile = document.getElementById(`${currentGuess}-${currentLetter}`)
let currentWord;
let gameOver = false;

const BACKSPACE = "Backspace";
const ENTER = "Enter";
const SECRETURL = "https://words.dev-apis.com/word-of-the-day";
const VALIDATE_URL = "https://words.dev-apis.com/validate-word";
const loserSecret = document.getElementById("secret");

const isLetter = (character) => {
    return /^[a-zA-Z]$/.test(character)
}

const setLoading = (isLoading) => {
    const loader = document.querySelector(".loader");
    (isLoading) ? loader.classList.remove("hidden") : loader.classList.add("hidden")
}

const gatherCurrentWord = () => {
    let word = "";
    for (let i = 0; i < 5; i++){
        word += document.getElementById(`${currentGuess}-${i+1}`).innerText;
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

    return characterCounts;
}

const evaluateWord = (word) => {
    const result = ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"];
    const wordArray = word.split('')
    const secretMap = createMap(secretWord);

    // First pass, assign all correct
    for(let i = 0; i < wordArray.length; i++) {
        const letter = wordArray[i]
        if (secretWord.charAt(i) === letter) {
            result[i] = "correct";
            secretMap[letter]--;
        }
    }

    // // Second pass, assign the presents
    for(let i = 0; i < wordArray.length; i++) {
        const letter = wordArray[i]
        if (secretWord.charAt(i) === letter) {
            // handled in first pass
        } else if (secretWord.includes(letter) && secretMap[letter] !== 0) {
            result[i] = "present";
            secretMap[letter]--;
        }
    }

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
    return responseObj.validWord;
}

const markInvalidWord = () => {
    for (let i = 0; i < 5; i++) {
        document.getElementById(`${currentGuess}-${i+1}`).classList.remove("invalid")

        setTimeout(() => {
            document.getElementById(`${currentGuess}-${i+1}`).classList.add("invalid")
        }, 50)
    }
}

const handleKeyPress = async (event) => {
    if (gameOver) {
        return;
    }
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
        if (currentLetter === 5 && currentTile.innerText !== "") {
            // Gather the word from the current guess
            gatherCurrentWord();
            // Validate the word
            const isValid = await validateCurrentWord(currentWord);

            if(!isValid) {
                markInvalidWord();
                return;
            }
            
            const result = evaluateWord(currentWord);
            // Update the CSS classes of the current guess
            updateGuessClasses(result);
            // Win, lose, or guess again
            if(isCorrect(result)){
                document.querySelector(".winner").style.display = "flex";
                gameOver = true;
            } else if (currentGuess === 6){
                document.querySelector(".loser").style.display = "flex";
                loserSecret.innerText = secretWord;
                gameOver = true;
            } else {
                currentGuess += 1;
                currentLetter = 1;
                currentWord = "";
                currentTile = document.getElementById(`${currentGuess}-${currentLetter}`)
            }
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

let display = "0";

const output = document.querySelector(".output");
const allButtons = document.querySelectorAll(".btn");

let numberArray = [];
let arithmeticArray = [];

const mathStrings = ["÷", "×", "-", "+"]

const setDisplay = (value) => {
    output.innerText = value;
}

const clearDisplay = () => {
    display = "0";
    setDisplay(display);
}

const handleNumberButton = (e) => {
    const selected = e.target.innerText;
    console.log(`You clicked on a number button: ${selected}`)

    if (display === "0") {
        display = selected;
        setDisplay(display);
    } else {
        display += selected;
        setDisplay(display);
    }
}
const handleFunctionButton = (e) => {
    const selected = e.target.innerText;
    console.log(`You clicked on a function button: ${e.target.innerText}`)
    if(mathStrings.includes(selected) && display !== "0") {
        numberArray.push(Number.parseInt(display));
        arithmeticArray.push(selected);
        clearDisplay()
    } else if (selected === "C") {
        numberArray.length = 0;
        arithmeticArray.length = 0;
        clearDisplay();
    } else if (selected === "←") {
        display = display.slice(0, -1);
        setDisplay(display);
    } else if (selected === "=") {
        numberArray.push(Number.parseInt(display));
        result = evaluate(numberArray, arithmeticArray)
        setDisplay(result)
    }
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => a / b;

const evaluate = (numbers, symbols) => {
    let result;

    console.log({ numbers, symbols })

    for (let i = 0; i < (numbers.length - 1); i++){
        let firstNumber;
        let secondNumber = numbers[i+1];
        if (i === 0) {
            firstNumber = numbers[i];
        } else {
            firstNumber = result;
        }
        console.log(symbols[i])
        console.log(firstNumber, secondNumber)
        switch (symbols[i]) {
            case '+':
                result = add(firstNumber, secondNumber);
            case '-':
                result = sub(firstNumber, secondNumber);
        }

        console.log({ result, i})
    }

    return result;
}

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(event) {
        return (event.target.classList.contains("btn-fn")) ? handleFunctionButton(event) : handleNumberButton(event);
    })
}
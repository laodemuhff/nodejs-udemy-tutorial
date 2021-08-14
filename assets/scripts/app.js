const defaultResult = 0;
let currentResult = defaultResult;

// Gets input form input field
function getUserInput(){
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function add(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult += parseInt(enteredNumber);
    // alert(++currentResult)
    createAndWriteOutput('+', initialResult, enteredNumber);
}  

function substract(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult -= parseInt(enteredNumber);
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult *= parseInt(enteredNumber);
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult /= parseInt(enteredNumber);
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
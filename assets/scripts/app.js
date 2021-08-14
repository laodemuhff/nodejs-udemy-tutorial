const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = []  ;
// Gets input form input field
function getUserInput(){
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
    operatorName,
    prevResult,
    enteredNumber,
    result
){
    const entryLog = {
        enteredNumber,
        operatorName,
        prevResult,
        result
    }
    
    logEntries.push(entryLog)
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult += parseInt(enteredNumber);
    // alert(++currentResult)
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}  

function substract(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult -= parseInt(enteredNumber);
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBSTRACT', initialResult, enteredNumber, currentResult)
}

function multiply(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult *= parseInt(enteredNumber);
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide(){
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult /= parseInt(enteredNumber);
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
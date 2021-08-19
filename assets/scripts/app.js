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

function calculateResult(operatorName){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let operator;

    if(operatorName === 'ADD'){
        currentResult += enteredNumber;
        operator = '+';    
    }

    if(operatorName === 'SUBSTRACT'){
        currentResult -= enteredNumber;
        operator = '-';
    }

    if(operatorName === 'MULTIPLY'){
        currentResult *= enteredNumber;
        operator = '*';
    }

    if(operatorName === 'DIVIDE'){
        currentResult /= enteredNumber;
        operator = '/';
    }

    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operatorName, initialResult, enteredNumber, currentResult)
}

function add(){
    calculateResult('ADD');
}  

function substract(){
    calculateResult('SUBSTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
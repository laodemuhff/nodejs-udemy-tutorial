const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2;

    return result;
}   

currentResult = add(10,10);

currentResult = (currentResult + 10) * 4; 

let calculationDescription = `(${defaultResult} + 10) * 4`;

outputResult(currentResult, calculationDescription)
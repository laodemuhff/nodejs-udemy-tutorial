const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2;
    alert('The Result is '+result);
}   

add(10,10);
add(5,5);

currentResult = (currentResult + 10) * 4;

let calculationDescription = `(${defaultResult} + 10) * 4`;

outputResult(currentResult, errorMessage)
const defaultResult = 0;

let currentResult = defaultResult;

currentResult = (currentResult + 10) * 4;

let calculationDescription = `(${defaultResult} + 10) * 4`;
let errorMessage = 'And Error \n' + 'Has Occured!';

console.log(30 + '30'); //3030
console.log(30 + 30); //60

outputResult(currentResult, errorMessage)
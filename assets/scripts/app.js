const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2;

    return result;
}   

currentResult = add(10,10);

let calculationDescription = `(${currentResult} + 10) * 4`;

currentResult = (currentResult + 10) * 4; 

outputResult(currentResult, calculationDescription)

// shadowed variables
let userName = "Farhan";
function greetUser(name){
    let userName = name
    alert(userName);
}
userName = "Manu"
greetUser('Max');

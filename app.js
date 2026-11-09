import promptSync from "prompt-sync";

const prompt = promptSync();

let firstNumber;
let secondNumber;
let operator;
let result;

firstNumber = Number(prompt("Enter the first number: "));
secondNumber = Number(prompt("Enter the second number: "));
operator = prompt("Enter the operator: ");

if (operator === "+") {
    result = firstNumber + secondNumber;
}
else if (operator === "*") {
    result = firstNumber * secondNumber;
}
else if (operator === "/") {
    result = firstNumber / secondNumber;
}
else if (operator === "-") {
    result = firstNumber - secondNumber;
}

console.log(result);